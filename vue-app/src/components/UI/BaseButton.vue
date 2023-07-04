<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #43D392;
  border: 1px solid #43D392;
  color: white;
  cursor: pointer;
  margin: 0.5rem;
}

button:hover,
button:active {
  background-color: #43D392;
  border-color: #43D392;
}

.flat {
  background-color: transparent;
  color: #43D392;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #ffff;
}
</style>
