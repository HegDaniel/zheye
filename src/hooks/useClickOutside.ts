import { onMounted, onUnmounted, ref, Ref } from "vue"

const userClickOutside = (elementRef: Ref<null | HTMLElement>) => {
    let isClickOutside = ref(true)
    const handler = (e: MouseEvent) => {
        if (elementRef.value) {
            if (elementRef.value.contains(e.target as HTMLElement)) {
                isClickOutside.value = false
            } else {
                isClickOutside.value = true
            }
        }
    }
    onMounted(() => {
        document.addEventListener('click', handler)
    })

    onUnmounted(() => {
        document.removeEventListener('click', handler)
    })
    console.log(isClickOutside.value);
    
    return isClickOutside
}



export default userClickOutside