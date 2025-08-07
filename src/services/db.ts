import type { Note } from "@/types/note";

export function useIndexedDB() {
    const dbName = 'anota_ai';
    let db: IDBDatabase | null = null;

    const openDB = () => {
        return new Promise<void>((resolve, reject) => {
            const request = indexedDB.open(dbName, 1);

            request.onsuccess = () => {
                db = request.result;
                resolve();
            };

            request.onerror = () => {
                reject(request.error);
            };

            request.onupgradeneeded = () => {
                db = request.result;
                if (!db.objectStoreNames.contains('user')) {
                    const userStore = db.createObjectStore('user', { keyPath: 'id' });
                    userStore.createIndex('nome', 'nome', { unique: false });
                }
                if (!db.objectStoreNames.contains('anotacoes')) {
                    const anotacoes = db.createObjectStore('anotacoes', { keyPath: 'id', autoIncrement: true });
                    anotacoes.createIndex('titulo', 'titulo', { unique: false });
                    anotacoes.createIndex('desc', 'desc', { unique: false });
                    anotacoes.createIndex('background', 'background', { unique: false });
                }
            };
        });
    };

    const addUser = (user: { nome: string }) => {
        if (!db) {
            console.warn("Banco de dados não está pronto.");
            return;
        }

        const transaction = db.transaction('user', 'readwrite');
        const store = transaction.objectStore('user');

        const userWithId = { ...user, id: 'singleton' };
        store.put(userWithId);
    };


    const newNote = (note: Note) => {
        if (!db) {
            console.warn("Banco de dados não está pronto.");
            return;
        }

        const transaction = db.transaction('anotacoes', 'readwrite');
        const store = transaction.objectStore('anotacoes');

        store.add({
            ...note
        });
    };

    const getUser = (): Promise<{ nome: string, id: string } | null> => {
        return new Promise((resolve, reject) => {
            if (!db) {
                reject("Banco de dados não aberto");
                return;
            }

            const transaction = db.transaction('user', 'readonly');
            const store = transaction.objectStore('user');
            const request = store.get('singleton');

            request.onsuccess = () => {
                if (request.result) {
                    resolve(request.result);
                } else {
                    resolve(null);
                }
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    };

    return {
        openDB,
        addUser,
        getUser,
        newNote
    };
}
