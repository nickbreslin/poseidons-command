<template>
  <div class="text-center">
    <div
      class="alert alert-primary text-dark"
      v-html="content.description"
    ></div>
    <button
      class="btn btn-lg text-uppercase fw-bold btn-primary"
      @click="doBegin()"
    >
      Begin
    </button>
  </div>
</template>

<script>
import content from "@/data/content";

export default {
  name: "TheIntroduction",
  data: function () {
    return {
      content: content.introduction,
    };
  },
  methods: {
    doBegin() {
      console.log("Button clicked!");
      this.$emit("doBegin");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
