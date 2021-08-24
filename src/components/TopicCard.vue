<template>
  <div class="text-center">
    <div class="alert alert-info text-dark fw-bold h1">
      <div class="h3">
        How much do you know about <b>{{ label }}</b>
      </div>
      <p v-show="description">Desc[{{ description }}]</p>
      <pre v-show="code">Code: [{{ code }}]</pre>
    </div>
    <div class="btn-group">
      <button
        class="btn btn-lg text-uppercase fw-bold btn-outline-primary"
        @click="doAnswer(0)"
      >
        Nothing
      </button>
      <button
        class="btn btn-lg text-uppercase fw-bold btn-outline-primary"
        @click="doAnswer(1)"
      >
        Some
      </button>
      <button
        class="btn btn-lg text-uppercase fw-bold btn-outline-primary"
        @click="doAnswer(2)"
      >
        Everything
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopicCard",
  props: {
    label: String,
    description: String,
    code: String,
  },
  methods: {
    doAnswer(value) {
      console.log("Button clicked!");
      this.$emit("doAnswer", value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
