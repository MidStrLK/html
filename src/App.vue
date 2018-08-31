<template>
  <div id="app">
    <home></home>
    <about></about>
    <resume></resume>
    <examples></examples>
    <contacts></contacts>
    <contactme></contactme>
  </div>
</template>

<script>
import home from './components/home.vue'
import about from './components/about.vue'
import resume from './components/resume.vue'
import examples from './components/examples.vue'
import contacts from "./components/contacts.vue";
import contactme from "./components/contactme.vue";

export default {
  name: 'app',
  components: {
      home,
      about,
      resume,
      examples,
      contacts,
      contactme
  }
}
</script>

<style>
</style>
