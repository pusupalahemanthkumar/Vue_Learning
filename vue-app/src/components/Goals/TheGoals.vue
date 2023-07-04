<template>
  <base-card
    :style="{
      marginTop: '4rem',
      display: 'flex',
      justifyContent: 'space-around',
    }"
  >
    <base-button
      :mode="storedGaolsButtonMode"
      @click="setSelectedTab('list-goals')"
      >Goals</base-button
    >
    <base-button :mode="addGoalButtonMode" @click="setSelectedTab('add-goals')"
      >Add Goal</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import AddGoals from "./AddGoals.vue";
import ListGoals from "./ListGoals.vue";
export default {
  components: {
    AddGoals,
    ListGoals,
  },
  data() {
    return {
      selectedTab: "list-goals",
      storedGoals: [
        {
          id: "1223",
          title: "Learn VueJS",
          description: "A javascript framework",
          link: "https://vuejs.org",
        },
        {
          id: "1224",
          title: "Learn Go Lang",
          description: "Backend development",
          link: "https://vuejs.org",
        },
      ],
    };
  },
  provide() {
    return {
      goals: this.storedGoals,
      deleteGoal: this.removeGoals,
      addGoal : this.addGoal,
    };
  },
  computed: {
    storedGaolsButtonMode() {
      return this.selectedTab === "list-goals" ? null : "flat";
    },
    addGoalButtonMode() {
      return this.selectedTab === "add-goals" ? null : "flat";
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addGoal(title, description, url) {
      const newGoal = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedGoals.unshift(newGoal);
      this.selectedTab = "list-goals";
    },
    removeGoals(id) {
      const idx = this.storedGoals.findIndex((d) => d.id === id);
      this.storedGoals.splice(idx, 1);
    },
  },
};
</script>

<style scoped></style>
