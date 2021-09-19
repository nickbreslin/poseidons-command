<template>
  <div class="card shadow mb-3 text-center">
    <div class="card-header h3 text-uppercase">Turns Taken</div>
    <div class="card-body h1">{{ turnsTaken }}</div>
  </div>
</template>

<script>
export default {
  name: "TurnsTaken",
  props: {
    turnsTaken: Number,
  },
};
</script>

<style scoped></style>
