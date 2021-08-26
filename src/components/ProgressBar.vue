<template>
  <div>
    <div class="fw-bold">{{ numerator }} of {{ denominator }}</div>
    <div class="progress" :style="`height: ${height}px`">
      <div
        :style="`width: ${percent}%`"
        class="progress-bar"
        :class="`bg-${bgClass}`"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    numerator: {
      type: Number,
      default: 0,
      validator: function (value) {
        return value >= 0;
      },
    },
    denominator: {
      type: Number,
      default: 1,
      validator: function (value) {
        return value >= 1;
      },
    },
    height: {
      type: Number,
      default: 10,
    },
    bgClass: {
      type: String,
      default: "primary",
      validator: function (value) {
        return (
          [
            "primary",
            "secondary",
            "success",
            "info",
            "warning",
            "danger",
          ].indexOf(value) !== -1
        );
      },
    },
  },
  computed: {
    percent() {
      let percent = (100 / this.denominator) * this.numerator;
      percent = Math.round(percent);
      return percent;
    },
  },
};
</script>
