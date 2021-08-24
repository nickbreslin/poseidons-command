<template>
  <div class="text-center">
    <div class="alert alert-primary text-dark fw-bold h1">
      This is the introduction.
    </div>
    <button
      class="btn btn-lg text-uppercase fw-bold btn-primary"
      @click="doBegin()"
    >
      Begin
    </button>
  </div>
</template>

<script>
export default {
  name: "TheIntroduction",
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
