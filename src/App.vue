<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import store from "./store";

export default {
  store,
  name: "App"
};
</script>

<style>
body{
  margin: 0;
}

#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
}

@media (max-width: 600px) {
  #app {
  margin-top: 30px;
}
} 

</style>
