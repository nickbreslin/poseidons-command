<template>
  <div class="card shadow mb-3 shadow">
    <div class="card-header h3 text-uppercase text-center">TRANSCRIPT</div>
    <div class="card-body">
      <div class="h1">{{ context }}</div>
      <!--<div class="alert alert-warning">{{ confidence }}</div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSpeechManager",
  data: function () {
    return {
      context: "",
      confidence: "",
    };
  },
  props: {},
  computed: {},
  methods: {
    init() {
      const SpeechRecognition =
        SpeechRecognition || window.webkitSpeechRecognition;
      const SpeechGrammarList =
        SpeechGrammarList || window.webkitSpeechGrammarList;
      const SpeechRecognitionEvent =
        SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

      this.recognition = new SpeechRecognition();
      const speechRecognitionList = new SpeechGrammarList();
      //speechRecognitionList.addFromString(grammar, 1);
      this.recognition.grammars = speechRecognitionList;
      this.recognition.continuous = false;
      this.recognition.lang = "en-US";
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;

      this.recognition.onresult = (event) => {
        const result = event.results[0][0].transcript;
        this.context = result;
        this.confidence = event.results[0][0].confidence;
      };

      this.recognition.onspeechend = () => {
        console.log("Onspeechend");
        this.recognition.stop();
      };
      this.recognition.onend = () => {
        console.log("OnEnd");
        this.recognition.start();
      };

      this.recognition.onnomatch = (event) => {
        console.log("On No Match", event);
      };

      this.recognition.onerror = (event) => {
        console.log("On Error", event.error);
      };

      this.recognition.start();
    },
  },
  mounted() {
    this.init();
  },
};
</script>
