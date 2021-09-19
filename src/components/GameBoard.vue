<template>
  <div class="grid">
    <div v-for="y in yAxis" :key="y" class="grid-row m-0 p-0">
      <div
        v-for="x in xAxis"
        :key="x"
        class="square border border-secondary alert-danger m-0 p-0 text-center"
      >
        <!-- {{ x }}{{ y }}
        <i class="bi bi-check-circle"></i>-->
        <i class="bi bi-x-circle"></i>
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
  props: {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.square {
  height: 60px;
  width: 60px;
  vertical-align: middle;
}

.grid-row {
  display: flex;
}

.bi {
  font-size: 2em;
}
</style>
