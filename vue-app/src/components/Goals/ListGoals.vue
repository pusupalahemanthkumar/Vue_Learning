<template>
   <ul>
    <goal-item
     v-for="goal in goals"
     :key="goal.id"
     :id="goal.id"
     :title="goal.title"
     :description="goal.description"
     :link="goal.link"
    ></goal-item>

   </ul>

</template>

<script>
import GoalItem from "./GoalItem.vue";
export default{
    components : {
        GoalItem,
    },
    inject : ['goals']
}

</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}

</style>