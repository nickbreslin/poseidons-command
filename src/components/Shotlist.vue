<template>
  <div class="card shadow mb-3 shadow">
    <div class="card-header h3 text-uppercase text-center">Shotlist</div>
    <div class="card-body text-center">
      <div v-for="(shot, i) in shotlist" :key="shot">
        <div
          class="alert mb-1"
          :class="{
            'alert-danger': shot.hit === true,
            'alert-secondary': shot.hit !== true,
          }"
        >
          <span
            class="badge me-3"
            :class="{
              'bg-danger': shot.hit === true,
              'bg-secondary': shot.hit !== true,
            }"
            >{{ shotlist.length - i }}</span
          >
          {{ shot.x }}{{ shot.y }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shotlist",
  props: {
    shotlist: Array,
  },
};
</script>

<style scoped></style>
