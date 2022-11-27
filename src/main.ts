import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';

import "./assets/main.css";

import { Amplify } from 'aws-amplify';
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const app = createApp(App);
app.use(BalmUI);
app.use(BalmUIPlus);
app.use(createPinia());
app.use(router);

app.mount("#app");
