<template>
  <div class="card shadow mb-3 shadow">
    <div class="card-header h3 text-uppercase text-center">Enemy Vessels</div>
    <div class="card-body">
      <div v-for="ship in shipsData" :key="ship.name">
        <div class="row">
          <div
            class="col text-end"
            :class="{
              ' text-danger text-decoration-line-through': ship.isSunk,
            }"
          >
            {{ ship.name }}
          </div>
          <div class="col">
            <span v-for="i in ship.size" :key="i">
              <i v-if="ship.isSunk" class="bi bi-x-circle text-danger me-1"></i>
              <i v-else class="bi bi-circle me-1"></i
            ></span>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer text-end">
      <button class="btn btn-outline-danger btn-sm" @click="toggleReveal()">
        Reveal Vessels
      </button>
      <pre
        v-show="revealVessels"
        class="border border-danger mt-3 text-start"
        >{{ ships }}</pre
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "EnemyVessels",
  data: function () {
    return {
      revealVessels: false,
    };
  },
  props: {
    shotlist: Array,
    ships: Array,
  },
  computed: {
    shipNames() {
      // Find all unique ships
      let shipNames = this.ships.map((ship) => ship.name);
      return [...new Set(shipNames)];
    },
    shipsData() {
      let shipData = [];

      // Find sizes for all unique ships
      this.shipNames.forEach((shipName) => {
        let segments = this.ships.filter((ship) => ship.name == shipName);
        let isShipSunk = this.didSinkShip(segments);
        shipData.push({
          name: shipName,
          size: segments.length,
          isSunk: isShipSunk,
        });
      });

      return shipData;
    },
  },
  methods: {
    toggleReveal() {
      this.revealVessels = !this.revealVessels;
    },
    didSinkShip(segments) {
      // reduce shotlist to just hitlist
      let hitlist = this.shotlist.filter((shot) => shot.hit);

      let hits = hitlist.filter((hit) => {
        let didHit = false;

        // causing some sort of overwrite of the ships prop
        segments.forEach((segment) => {
          if (segment.x == hit.x && segment.y == hit.y) {
            didHit = true;
            return;
          }
        });

        return didHit; // return for hitlist.filter
      });

      return segments.length == hits.length;
    },
  },
};
</script>

<style scoped></style>
