<template>
  <div class="text-center">
    <div class="card">
      <div class="card-header fw-bold h4">
        {{ label }}
      </div>

      <div class="card-body">
        <button
          v-show="!isRevealed"
          class="btn btn-lg btn-secondary fw-bold"
          @click="reveal()"
        >
          Reveal card
        </button>
        <div v-show="isRevealed">
          <p v-show="description" class="mb-0">{{ description }}</p>
          <!-- <pre v-show="code">Code: [{{ code }}]</pre> -->
        </div>
      </div>
      <div v-show="isRevealed" class="card-footer">
        <div class="fw-bold mb-2">How difficult was this topic?</div>

        <div class="btn-group">
          <button class="btn fw-bold btn-outline-primary" @click="doAnswer(0)">
            Not difficult
          </button>
          <button class="btn fw-bold btn-outline-primary" @click="doAnswer(1)">
            Somewhat difficult
          </button>
          <button class="btn fw-bold btn-outline-primary" @click="doAnswer(2)">
            Very difficult
          </button>
        </div>
      </div>
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
