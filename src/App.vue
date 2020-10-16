<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import store from "./store";

export default {
  store,
  name: 'App',
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
