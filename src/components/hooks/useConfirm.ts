// composables/useConfirm.ts
import { ref } from 'vue'

const isOpen = ref(false)
const message = ref('')
let resolveFn: ((value: boolean) => void) | null = null

const confirm = (msg: string): Promise<boolean> => {
    message.value = msg
    isOpen.value = true

    return new Promise((resolve) => {
        resolveFn = resolve
    })
}

const accept = () => {
    if (resolveFn) {
        resolveFn(true)
        resolveFn = null
    }
    isOpen.value = false
}

const cancel = () => {
    if (resolveFn) {
        resolveFn(false)
        resolveFn = null
    }
    isOpen.value = false
}

export function useConfirm() {
    return {
        isOpen,
        message,
        confirm,
        accept,
        cancel
    }
}
