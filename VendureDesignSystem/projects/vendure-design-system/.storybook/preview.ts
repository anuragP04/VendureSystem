import { type Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

const customViewports = {
  large: {
    name: "Large Screen",
    styles: {
      width: "1920px",
      height: "1080px"
    }
  },
  small: {
    name: "Small Screen",
    styles: {
      width: "800px",
      height: "963px"
    }
  }
};

export const themes: any = {
  light: {
    primary: 'red',
  },
  dark: {
    primary: 'yellow',
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    viewport: { viewports: customViewports }
  },
};

export default preview;
