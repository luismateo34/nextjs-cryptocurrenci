import type { Meta, StoryObj } from "@storybook/react";
import { NavBarTest } from "./navbarTest";

const meta = {
  title: "Components/Navbar",
  component: NavBarTest,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof NavBarTest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    size: "big",
    primaryBg: true,
  },
};
export const Secundar: Story = {
  args: {
    primary: true,
    size: "medium",
    primaryBg: true,
  },
};
export const Tertiary: Story = {
  args: {
    primary: true,
    size: "small",
    primaryBg: true,
  },
};
export const Fourth: Story = {
  args: {
    primary: false,
    size: "big",
    primaryBg: true,
  },
};

export const Fifth: Story = {
  args: {
    primary: false,
    size: "medium",
    primaryBg: true,
  },
};

export const Sixt: Story = {
  args: {
    primary: false,
    size: "small",
    primaryBg: true,
  },
};

export const Seven: Story = {
  args: {
    primary: true,
    size: "big",
    secundaryBg: true,
  },
};
export const Eight: Story = {
  args: {
    primary: true,
    size: "medium",
    secundaryBg: true,
  },
};
export const Nine: Story = {
  args: {
    primary: true,
    size: "small",
    secundaryBg: true,
  },
};
export const Ten: Story = {
  args: {
    primary: false,
    size: "big",
    secundaryBg: true,
  },
};
export const Eleven: Story = {
  args: {
    primary: false,
    size: "medium",
    secundaryBg: true,
  },
};
export const Twelve: Story = {
  args: {
    primary: false,
    size: "small",
    secundaryBg: true,
  },
};
