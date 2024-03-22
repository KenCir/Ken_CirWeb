import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

setup((app) => {
  const vuetify = createVuetify({
    components,
    directives,
  });
  app.use(vuetify);
});

export const decorators = [
  (story: any) => ({
    components: { story },
    template: '<v-app><story /></v-app>',
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
