import { type Meta, type StoryObj } from "@storybook/angular";
import { InputFieldComponent } from "./input-field.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<InputFieldComponent> = {
  title: "Components/InputField",
  component: InputFieldComponent,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    defaultValue: {
      control: {
        type: "text",
      },
    },
    value: {
      control: {
        type: "text",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    disabled: { control: "boolean" }, // Control for disabling the input
    clear: { control: "boolean" }, // Control for clear icon in input
    focused: { control: "boolean" }, // Control for focused state
    error: { control: "boolean" }, // Control for error state
    hint: {
      control: {
        type: "text",
      },
    },
    startAdornment: {
      control: {
        type: "text",
      },
    },
    endAdornment: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<InputFieldComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

// Default Input Field
export const DefaultValue: Story = {
  args: {
    defaultValue: "Input Field",
  },
};

// Input Field With Icon
export const WithIcon: Story = {
  args: {
    startAdornment: "home",
  },
};

// Input Field Focused
export const Focused: Story = {
  args: {
    focused: true,
  },
};

// Input Field Disabled
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

// Input Field With Placeholder
export const Placeholder: Story = {
  args: {
    placeholder: "olivia@verdure.com",
  },
};

// Input Field With Label
export const WithLabel: Story = {
  args: {
    label: "Email",
  },
};

// Input Field With Hint
export const WithHint: Story = {
  args: {
    hint: "This is a hint text to help user.",
  },
};

// Input Field With Error
export const WithError: Story = {
  args: {
    error: true,
    hint: "This is a hint text to help user.",
  },
};

// Input Field With Error & Focused
export const WithErrorAndFocused: Story = {
  args: {
    error: true,
    focused: true,
  },
};
