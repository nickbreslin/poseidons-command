<template>
  <div class="progress" :style="`height: ${height}px`">
    <div
      :style="`width: ${percentComplete}%`"
      class="progress-bar"
      :class="`bg-${primary}`"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    percent: {
      type: Number,
      default: 0,
      validator: function (value) {
        return value >= 0 && value <= 100;
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
};
</script>
