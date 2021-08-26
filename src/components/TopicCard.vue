<template>
  <div class="text-center">
    <div class="card">
      <div class="card-header fw-bold h4">
        {{ label }}
      </div>
    </div>
    <div class="card-body">
      <button
        v-show="!isRevealed"
        class="btn btn-lg btn-secondary fw-bold"
        @click="reveal()"
      >
        Reveal card
      </button>
    </div>
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
  data: function () {
    return {
      isRevealed: false,
    };
  },
  props: {
    label: String,
    description: String,
    code: String,
  },
  methods: {
    resetState() {
      this.isRevealed = false;
    },

    doAnswer(value) {
      this.$emit("doAnswer", value);
      this.resetState();
    },
    reveal() {
      this.isRevealed = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
