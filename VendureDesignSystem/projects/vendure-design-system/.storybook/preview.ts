import { moduleMetadata, type Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { ThemeService } from "../src/public-api";

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
    primary: '#125AC0',
  },
  dark: {
    primary: '#1e72e9',
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
    viewport: { viewports: customViewports },
  },
  decorators: [
    moduleMetadata({
      declarations: [],
    }),
    (storyFn: any, context: any) => {
      const { template, ...story } = storyFn();
      const themeService = new ThemeService();
      themeService.setTheme(context?.userGlobals?.theme === 'LIGHT' ? themes.light : themes.dark);
      return {
        ...story,
        template: template
      };
    }
  ]
};

export default preview;


export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "LIGHT", icon: "circlehollow", title: "Light Theme" },
        { value: "DARK", icon: "circle", title: "Dark Theme" },
      ],
      showName: true,
    },
  },
};