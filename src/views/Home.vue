<template>
  <div class="alert alert-secondary mt-3 text-center">
    <h1 class="text-uppercase m-0">Poseidon's Command</h1>
  </div>
  <div class="row" v-show="!gameOver">
    <div class="col-sm-8"><GameBoard class="mb-3" :shotlist="shotlist" /></div>
    <div class="col-sm-4">
      <TheSpeechManager @doTurn="doTurn($event)" />
      <TurnsTaken :turnsTaken="shotlist.length" />
      <Shotlist :shotlist="shotlist" />
    </div>
  </div>
  <div v-show="gameOver"><h1>GAME OVER</h1></div>
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
        { x: "A", y: "6", hit: false },
        { x: "C", y: "1", hit: false },
        { x: "H", y: "5", hit: false },
      ],
      ships: [
        { x: "D", y: "5" },
        { x: "D", y: "3" },
      ],
      gameOver: false,
    };
  },
  computed: {},
  methods: {
    doTurn(shot) {
      // can't repeat a shot.
      //

      this.turnsTaken += 1;

      let didHit = this.ships.filter(
        (ship) => ship.x == shot.x && ship.y == shot.y
      );

      let hit = Boolean(didHit.length);

      this.shotlist.push({ x: shot.x, y: shot.y, hit: hit });

      // if win condition?

      let hits = this.shotlist.filter((shot) => shot.hit);

      if (hits.length == this.ships.length) {
        this.gameOver = true;
      }

      // no lose condition.
    },
  },
};
</script>

<style scoped></style>
