<template>
  <div class="card shadow mb-3">
    <div class="card-header h3 text-uppercase text-center">Instructions</div>
    <div class="card-body">
      <ul>
        <li><b>This game will ONLY work on Chrome.</b></li>
        <li>Give the browser permission to use your <b>microphone.</b></li>
        <li>
          Commands for where to fire, displayed in the <b>TRANSCRIPT</b> should
          be coordinates, "B 3", for example.
        </li>
        <li>
          You can use the phonetic alphabet as well
          <pre>
Alpha, Bravo, Charlie, Delta, Echo, Foxtrot, Hotel, India, Juliet</pre
          >
        </li>
        <li>
          The speech-to-text feature may run into errors and you'll need to
          click <b>Start</b> to continue the speech-to-text functionality .
        </li>
        <li>Game ends when all enemy vessels are sunk.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Instructions",
};
</script>

<style scoped></style>
