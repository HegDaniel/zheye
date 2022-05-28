<template>
    <div class="dropdown" ref="dropdownRef">
        <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">{{ title }}</a>
        <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
            <slot></slot>
        </ul>
    </div>
</template>

<script lang="ts">
import userClickOutside from '../hooks/useClickOutside'
import { defineComponent, ref, watch } from "vue"
export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        }
    },
    setup() {
        const isOpen = ref(false)
        const dropdownRef = ref<null | HTMLElement>(null)
        let isClickOutside = userClickOutside(dropdownRef)
        const toggleOpen = () => {
            isClickOutside.value = false
            isOpen.value = !isOpen.value
        }


        watch(isClickOutside, () => {
            // console.log(isClickOutside);     
            if (isClickOutside && isOpen.value) {
                isOpen.value = false
            }
            //  if (!isClickOutside && !isOpen.value) {
            //     isOpen.value = true
            // }

        })
        // watch(isOpen, () => {
        //     console.log(isOpen.value);
        // })

        return {
            isOpen,
            toggleOpen,
            dropdownRef
        }
    }
})
</script>

<style>
</style>