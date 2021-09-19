<template>
  <div class="alert alert-secondary mt-3 text-center">
    <h1 class="text-uppercase m-0">Poseidon's Command</h1>
  </div>
  <div class="row">
    <div class="col-sm-8"><GameBoard class="mb-3" /></div>
    <div class="col-sm-4">
      <TheSpeechManager v-if="0" class="mb-3 card card-body shadow" />
      <TurnsTaken :turnsTaken="shotlist.length" />
      <Shotlist :shotlist="shotlist" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import TheSpeechManager from "@/components/TheSpeechManager";
import GameBoard from "@/components/GameBoard";
import TurnsTaken from "@/components/TurnsTaken";
import Shotlist from "@/components/Shotlist";

export default {
  name: "Home",
  components: {
    TheSpeechManager,
    GameBoard,
    TurnsTaken,
    Shotlist,
  },
  data: function () {
    return {
      shotlist: [
        { x: 0, y: 1, hit: true },
        { x: 0, y: 1, hit: false },
        { x: 0, y: 1, hit: true },
      ],
    };
  },
  computed: {},
  methods: {
    doTurn(x, y) {
      this.turnsTaken += 1;

      this.shotlist.push({ x: x, y: y });

      // if win condition?

      // no lose condition.
    },
  },
};
</script>

<style scoped></style>
