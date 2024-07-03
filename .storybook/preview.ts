
import type { Preview } from "@storybook/vue3";
import { setup } from '@storybook/vue3'
// Styles
import vuetify from "../utils/vuetify";
import { withScreenshot } from "storycap";

setup((app) => {
  if (app) {
    app.use(vuetify)
  }
})
export const decorators = [withScreenshot(),
  (story: any) => ({
    components: { story },
    template: '<v-app><story /></v-app>',
  }),
]

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
