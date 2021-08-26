<template>
  <!-- <TopicCard /> -->
  <!-- Conclusion -->

  <TheIntroduction v-show="!isStarted" @doBegin="doBegin()" />
  <div v-show="isStarted && !isDone">
    <TopicCard v-bind="currentTopic" @doAnswer="doAnswer($event)" />
  </div>
  <ProgressBar
    v-show="isStarted"
    :numerator="currentTopicIndex"
    :denominator="totalTopics"
  />

  <TheConclusion v-show="isDone" />
  <div class="mt-3 alert alert-success">{{ responses }}</div>
</template>

<script>
// @ is an alias to /src

import TheIntroduction from "@/components/TheIntroduction";
import TheConclusion from "@/components/TheConclusion";

import TopicCard from "@/components/TopicCard";
import ProgressBar from "@/components/ProgressBar";
import topicsJSON from "@/data/topics";

export default {
  name: "Home",
  components: {
    TheIntroduction,
    TopicCard,
    ProgressBar,
    TheConclusion,
  },
  data: function () {
    return {
      topics: topicsJSON,
      currentTopicIndex: 0,
      isStarted: false,
      responses: [],
    };
  },
  computed: {
    currentTopic() {
      let filteredTopic = this.topics.filter((e) => e.id);
      return filteredTopic[this.currentTopicIndex];
    },
    totalTopics() {
      return this.topics.length;
    },
    isDone() {
      return this.currentTopicIndex == this.totalTopics;
    },
  },
  methods: {
    doBegin() {
      console.log("Home View sees doBegin");
      this.isStarted = true;
    },
    doAnswer(value) {
      console.log("Value", value);
      this.currentTopicIndex += 1;
      this.responses.push(value);
    },
  },
};
</script>

<style scoped></style>
