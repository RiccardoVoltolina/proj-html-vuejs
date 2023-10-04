import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
createApp(App).mount('#app')
