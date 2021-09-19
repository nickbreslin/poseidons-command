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
      {{ ships }}
    </div>
  </div>
  <div>
    <div class="alert alert-success text-center">
      <h1>GAME OVER</h1>
      <button class="btn btn-lg btn-success text-uppercase" @click="init()">
        Restart
      </button>
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
      shotlist: [],
      ships: [],
      gameOver: false,
    };
  },
  computed: {},
  methods: {
    hasShip(coord) {
      let didHit = this.ships.filter(
        (ship) => ship.x == coord.x && ship.y == coord.y
      );

      return Boolean(didHit.length);
    },
    doTurn(shot) {
      // can't repeat a shot.
      //

      this.turnsTaken += 1;

      let hit = this.hasShip(shot);

      this.shotlist.push({ x: shot.x, y: shot.y, hit: hit });

      // if win condition?

      let hits = this.shotlist.filter((shot) => shot.hit);

      if (hits.length == this.ships.length) {
        this.gameOver = true;
      }

      // no lose condition.
    },
    placeShips() {
      let xAxis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
      let yAxis = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

      let xIndex = Math.floor(Math.random() * xAxis.length);
      let yIndex = Math.floor(Math.random() * yAxis.length);

      let x = xAxis[xIndex];
      let y = yAxis[yIndex];

      let coord = { x: x, y: y };

      let taken = this.hasShip(coord);

      if (!taken) {
        this.ships.push(coord);
      }
    },
    init() {
      this.shotlist = [];
      this.ships = [];
      this.placeShips();
      this.gameOver = false;
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped></style>
