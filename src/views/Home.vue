<template>
  <!-- <TopicCard /> -->
  <!-- Conclusion -->

  <TheIntroduction v-show="!isStarted" @doBegin="doBegin()" />
  <div v-show="isStarted && !isDone">
    <TopicCard v-bind="currentTopic" @doAnswer="doAnswer($event)" />

    {{ currentTopicCount }} of {{ totalTopics }}
    <div class="progress" style="height: 10px">
      <div
        :style="`width: ${percentComplete}%`"
        class="progress-bar bg-primary"
      ></div>
    </div>
  </div>
  <div v-show="isDone">DONE!</div>
  <!-- Conclusion v-show="isDone" />-->
  <div class="alert alert-success">{{ responses }}</div>
</template>

<script>
// @ is an alias to /src

import TheIntroduction from "@/components/TheIntroduction";
import TopicCard from "@/components/TopicCard";

import topicsJSON from "@/data/topics";

// TOPICCARD --> stored to vuex
// -- responsibility of showing the result is the result view.

export default {
  name: "Home",
  components: {
    TheIntroduction,
    TopicCard,
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
    currentTopicCount() {
      return this.currentTopicIndex + 1;
    },
    totalTopics() {
      return this.topics.length;
    },
    percentComplete() {
      return (100 / this.totalTopics) * this.currentTopicIndex;
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
