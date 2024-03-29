<template>
  <div class="card shadow mb-3 shadow">
    <div class="card-header h3 text-uppercase text-center">TRANSCRIPT</div>
    <div class="card-body text-center">
      <h3 class="text-danger" v-show="abort">
        Error encountered. Restart recording.
      </h3>
      <div class="h1">{{ command }}&nbsp;</div>
      <button
        v-show="!active"
        class="btn btn-lg btn-primary text-uppercase"
        @click="toggleRecognition()"
      >
        <i class="bi bi-mic-fill me-3"></i>Start
      </button>
      <button
        v-show="active"
        class="btn btn-lg btn-danger text-uppercase"
        @click="toggleRecognition()"
      >
        <i class="bi bi-mic-mute-fill me-3"></i>Stop
      </button>
    </div>
    <div class="card-footer">
      <b>Speech Recognition</b>
      <div class="text-small">{{ transcript }}</div>
    </div>
  </div>
</template>

<script>
import replacementWords from "@/data/replacements";

export default {
  name: "TheSpeechManager",
  data: function () {
    return {
      active: true,
      transcript: "",
      command: "",
      confidence: "",
      abort: false,
      replacementWords: replacementWords,
    };
  },
  props: {},
  computed: {},
  methods: {
    toggleRecognition() {
      this.active = !this.active;

      if (this.active) {
        this.abort = false;
        this.recognition.start();
      } else {
        this.recognition.stop();
      }
    },
    validateTranscript(transcript) {
      console.log(transcript);

      this.command = "";

      transcript = transcript.replace("-", "");
      transcript = transcript.replace(" ", "");

      transcript = this.specialRules(transcript);

      if (transcript.length < 2 || transcript.length > 3) {
        return false;
      }

      // 1 is won, "I1"
      // 2 is too, "I2"
      // b4 is before
      // remove dashes
      //

      // implement phonetic alphabet
      // 1 is one

      let x = transcript[0];
      let y = transcript.substring(1, transcript.length);

      x = x.toUpperCase();

      let xAxis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
      let yAxis = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

      if (!xAxis.includes(x)) {
        return false;
      }

      if (!yAxis.includes(y)) {
        return false;
      }

      this.command = `${x}${y}`;

      this.$emit("doTurn", { x: x, y: y });
    },
    init() {
      const SpeechRecognition =
        SpeechRecognition || window.webkitSpeechRecognition;
      const SpeechGrammarList =
        SpeechGrammarList || window.webkitSpeechGrammarList;
      const SpeechRecognitionEvent =
        SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

      this.recognition = new SpeechRecognition();
      this.recognition.grammars = new SpeechGrammarList();
      this.recognition.continuous = false;
      this.recognition.lang = "en-US";
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;

      this.recognition.onresult = (event) => {
        this.validateTranscript(event.results[0][0].transcript);
        this.transcript = event.results[0][0].transcript;
        this.confidence = event.results[0][0].confidence;
      };

      this.recognition.onspeechend = () => {
        console.log("Onspeechend");
        this.recognition.stop();
      };
      this.recognition.onend = () => {
        console.log("OnEnd");
        if (this.active && !this.abort) {
          setTimeout(() => {
            this.recognition.start();
          }, 100);
        }
      };

      this.recognition.onnomatch = (event) => {
        console.log("On No Match", event);
      };

      this.recognition.onerror = (event) => {
        console.log("On Error", event.error);
        this.abort = true;
        this.active = false;
      };

      this.recognition.start();
    },
    specialRules(transcript) {
      transcript = transcript.toLowerCase();

      replacementWords.forEach((replacement) => {
        if (transcript.includes(replacement.from)) {
          transcript = transcript.replace(replacement.from, replacement.to);
          console.log(transcript);
        }
      });

      return transcript;
    },
  },
  mounted() {
    this.init();
  },
};
</script>
