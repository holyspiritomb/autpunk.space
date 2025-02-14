<script setup lang="ts">
import EasySpeech from 'easy-speech'
import {VPButton} from 'vitepress/theme-without-fonts';

EasySpeech.init({ maxTimeout: 5000, interval: 250 })
    .then(() => console.debug('EasySpeech load complete'))
    .catch(e => console.error(e))

// TODO: Figure out how to wrap around other conponents so that pages can be read aloud
let textInput = "Hello, world"

const speechMe = () => {
    EasySpeech.on({
        start: function() {console.log("EasySpeech speaking now")},
        end: function() {console.log("EasySpeech done speaking")},
        pause: function() {console.log("EasySpeech speech paused")},
        resume: function() {console.log("EasySpeech speech resumed")}
    })
    EasySpeech.speak({
        text: textInput,
        // voice: myLangVoice, // optional, will use a default or fallback
        pitch: 1,
        rate: 1,
        volume: 1,
        // there are more events, see the API for supported events
        boundary: e => console.debug('boundary reached')
    })
}
</script>

<template>
    <VPButton theme="brand" text="Greet me" @click='speechMe'/>
</template>
