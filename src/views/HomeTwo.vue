<template>
    <div>
        <h1>Home</h1>
        <input type="text" v-model="search">
        <p>Search term - {{ search }}</p>
        <div v-for="name in matchingNames" :key="name">{{ name }}</div>
        <button @click="handleClick">Stop watching</button>
    </div>
</template>
<script>
import { computed, ref, watch, watchEffect } from 'vue'

export default {
    name: 'Home',
    setup() {
        const search = ref('')
        const names = ref(['Yoshi', 'Peach', 'Mario', 'Luigi', 'Toad', 'Bowser'])

        const stopWatch = watch(search, () => {
            console.log('watched func ran')
        })

        const stopEffect = watchEffect(() => {
            console.log('watchEffect ran', search.value)
        })

        const matchingNames = computed(() => {
            return names.value.filter((name) => name.toLowerCase().includes(search.value))
        })

        const handleClick = () => {
            stopWatch()
            stopEffect()
        }
        // const matchingNames = comppu
        return { search, names, matchingNames, handleClick }
    }
    
}
</script>
<style lang="">
    
</style>