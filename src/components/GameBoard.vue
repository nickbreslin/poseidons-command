<template>
  <div class="grid card card-body shadow p-5 text-center">
    <div class="grid-row justify-content-center">
      <div class="square text-center"></div>
      <div
        v-for="x in xAxis"
        :key="x"
        class="square m-0 p-0 text-center d-flex flex-column"
      >
        <span class="mt-auto h3 m-0 p-0 pb-2">{{ x }}</span>
      </div>
    </div>
    <div
      v-for="y in yAxis"
      :key="y"
      class="grid-row m-0 p-0 justify-content-center"
    >
      <div class="square d-flex flex-row-reverse align-items-center">
        <div class="text-end h3 m-0 p-0 pe-3">{{ y }}</div>
      </div>
      <div
        v-for="x in xAxis"
        :key="x"
        class="square border border-secondary m-0 p-0 text-center"
        :class="{
          'alert-primary': hitState(x, y) === 'NO_SHOT',
          'alert-danger': hitState(x, y) == 'HIT',
          'alert-secondary': hitState(x, y) == 'MISS',
        }"
      >
        <i v-if="hitState(x, y) == 'HIT'" class="bi bi-x-circle"></i>
        <i v-if="hitState(x, y) == 'MISS'" class="bi bi-circle"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameBoard",
  data: function () {
    return {
      xAxis: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
      yAxis: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    };
  },
  props: {
    shotlist: Array,
  },
  computed: {},
  methods: {
    hitState(x, y) {
      const shot = this.shotlist.filter((shot) => shot.x == x && shot.y == y);

      if (!shot.length) {
        return "NO_SHOT";
      }

      return shot[0].hit === true ? "HIT" : "MISS";
    },
  },
  mounted() {},
};
</script>

<style scoped>
.grid {
  margin: auto;
}
.square {
  height: 75px;
  width: 75px;
  vertical-align: middle;
}

.grid-row {
  display: flex;
}

.bi {
  font-size: 3em;
}
</style>
