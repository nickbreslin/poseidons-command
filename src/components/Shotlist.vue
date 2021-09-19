<template>
  <div class="card shadow mb-3 shadow">
    <div class="card-header h3 text-uppercase text-center">Shotlist</div>
    <div class="card-body">
      <div v-for="(shot, i) in shotlist" :key="shot">
        <div
          class="alert mb-1"
          :class="{
            'alert-danger': shot.hit === true,
            'alert-secondary': shot.hit !== true,
          }"
        >
          Shot #{{ i + 1 }} -- {{ shot.x }},{{ shot.y }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shotlist",
  props: {
    shotlist: [],
  },
};
</script>

<style scoped></style>
