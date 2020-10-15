<template>
  <div id="app">
    <ContactList />
  </div>
</template>

<script>
import store from "./store";
import ContactList from "./components/ContactList";


export default {
  store,
  name: 'App',
  components: {
    ContactList
  }
}
</script>

<style>
#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
}
</style>
