<template>
  <the-header title="Goal App"></the-header>
  <the-goals></the-goals>
</template>



<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheGoals from "./components/Goals/TheGoals.vue";

export default {
  components: {
    TheHeader,
    TheGoals,
  },
};
</script>



<!-- Global Stylings -->
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

*{
  box-sizing: border-box;
}
html {
  font-family: "Roboto", sans-serif;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #1a1a1a;  
}
</style>
