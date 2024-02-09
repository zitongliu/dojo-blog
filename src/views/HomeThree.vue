<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is {{ ninjaOne.name }} and my age is {{ ninjaOne.age }}</p>
    <button @click="updatedNinjaOne">Click me</button>
    <!-- <button @click="ninjaOne.age++">Add 1 to age</button> -->
    <!-- <input type="text" v-model="ninjaOne.name"> -->

    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updatedNinjaTwo">Update ninja two</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive } from 'vue'

// Two ways to create reactive values in vue3.
// 1. via ref
// 2. via reactive
export default {
  name: 'HomeView',
  setup() {

    // via ref
    const ninjaOne = ref({ name: 'Mario', age: 30 })
    // via reactive
    const ninjaTwo = reactive({ name: 'Luigi', age: 35 })
    
    const updatedNinjaOne = () => {
      ninjaOne.value.age = 40
    }
    const updatedNinjaTwo= () => {
      ninjaTwo.age = 40
    }

    /*
      Note
      We can't use primitive values in reactive
      ie we can't do
      const nameTwo = reactive('luigi')

    */

    return {
      ninjaOne,
      ninjaTwo,
      updatedNinjaOne,
      updatedNinjaTwo
    }
  }
}
</script>
