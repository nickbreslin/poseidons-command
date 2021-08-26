<template>
  <div class="text-center">
    <div class="alert alert-primary text-dark fw-bold h1">
      This is the conclusion.
    </div>
  </div>
</template>

<script>
export default {
  name: "TheIntroduction",
  methods: {
    doBegin() {
      console.log("Button clicked!");
      // go to the results page
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
