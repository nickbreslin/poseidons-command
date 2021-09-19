<template>
  <div class="grid card card-body shadow p-5 text-center">
    <div class="grid-row justify-content-center">
      <div class="square text-center"></div>
      <div v-for="x in xAxis" :key="x" class="square m-0 p-0 text-center">
        {{ x }}
      </div>
    </div>
    <div
      v-for="y in yAxis"
      :key="y"
      class="grid-row m-0 p-0 justify-content-center"
    >
      <div class="square text-center">{{ y }}</div>
      <div
        v-for="x in xAxis"
        :key="x"
        class="square border border-secondary m-0 p-0 text-center"
        :class="{
          'alert-primary': 1,
          'alert-danger': x === 'C',
          'alert-secondary': y === '3',
        }"
      >
        <!--{{ x }}{{ y }}-->
        <!-- <i class="bi bi-check-circle"></i>-->
        <!--<i class="bi bi-x-circle"></i>-->
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
    shotList: [],
  },
  computed: {},
  methods: {},
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
  font-size: 2em;
}
</style>
