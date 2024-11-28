import { type Meta, type StoryObj } from "@storybook/angular";
import { ButtonComponent } from "./button.component";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: "Components/Button",
  component: ButtonComponent,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" }, // Common action for button clicks
    disabled: { control: "boolean" }, // Control for disabling the button
    size: {
      control: {
        type: "select",
      },
      options: ["small", "default"], // Define size options
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["filled", "outlined", "text"], // Define variant options
    },
    startIcon: {
      control: { type: "text" }, // Control for the start icon
    },
    endIcon: {
      control: { type: "text" }, // Control for the start icon
    },
    iconButton: { control: "boolean" },
    icon: { control: { type: "text" } },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

// Filled button
export const Filled: Story = {
  args: {
    label: "Button",
    variant: "filled",
  },
};

// Outlined button
export const Outlined: Story = {
  args: {
    label: "Outlined Button",
    variant: "outlined",
  },
};

// Text button
export const Text: Story = {
  args: {
    label: "Text Button",
    variant: "text",
  },
};

// Disabled button state
export const Disabled = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
};

// Icon button state
export const IconButton = {
  args: {
    icon: "home",
    iconButton: true,
  },
};

// Button with different sizes
export const Small: Story = {
  args: {
    label: "Small Button",
    size: "small",
  },
};

export const DefaultSize: Story = {
  args: {
    label: "Large Button",
    size: "default",
  },
};

// Button with start icon
export const WithStartIcon: Story = {
  args: {
    label: "Start Icon",
    startIcon: "home",
  },
};

// Button with end icon
export const WithEndIcon: Story = {
  args: {
    label: "End Icon",
    endIcon: "home",
  },
};

// Button with event
export const ButtonWithClickEvent: Story = {
  args: {
    label: "Click Me",
    onClick: () => {
      alert("Clicked");
    },
  },
};
