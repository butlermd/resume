import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import appValues from './assets/values.json';
import overrideValues from './assets/overrides.json';
import type { AppValues } from '@/types';
import { contactKey, experienceKey, nameKey, skillsKey, taglineKey } from '@/injectionKeys';
import { deepDefaults } from '@/util';

console.log(overrideValues);

const app = createApp(App);

app.use(router);

const values = deepDefaults(appValues as AppValues, overrideValues);
app.provide(nameKey, values.name);
app.provide(taglineKey, values.tagline);
app.provide(contactKey, values.resume.contact);
app.provide(experienceKey, values.resume.experience);
app.provide(skillsKey, values.resume.skills);

app.mount('#app');

