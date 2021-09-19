<template>
  <div class="alert alert-secondary mt-3">
    <h1 class="text-uppercase m-0">Poseidon's Command</h1>
  </div>
  <div class="row">
    <div class="col-8"><GameBoard class="mb-3" /></div>
    <div class="col-4">
      <TheSpeechManager v-if="0" class="mb-3 card card-body shadow" />
      <TurnsTaken :turnsTaken="turnsTaken" />

      <div class="card shadow mb-3 shadow">
        <div class="card-header h3 text-uppercase">Shotlist</div>
        <div class="card-body">
          <div v-for="(shot, i) in shotsFired" :key="shot">
            <div
              class="alert mb-1"
              :class="{
                'alert-danger': shot.hit === true,
                'alert-secondary': shot.hit !== true,
              }"
            >
              Shot #{{ i + 1 }} -- {{ shot.x }},{{ shot.y }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import TheSpeechManager from "@/components/TheSpeechManager";
import GameBoard from "@/components/GameBoard";
import TurnsTaken from "@/components/TurnsTaken";

export default {
  name: "Home",
  components: {
    TheSpeechManager,
    GameBoard,
    TurnsTaken,
  },
  data: function () {
    return {
      turnsTaken: 0,
      shotsFired: [
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

      this.shortsFired.push({ x: x, y: y });

      // if win condition?

      // no lose condition.
    },
  },
};
</script>

<style scoped></style>
