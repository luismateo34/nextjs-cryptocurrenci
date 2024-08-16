import type { Meta, StoryObj } from "@storybook/react";
import { Maincard } from "@/stories/app/main";

const meta = {
  title: "Index/Cardection",
  component: Maincard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Maincard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    secundary: false
  }
};
export const Secundaty: Story = {
  args: {
    secundary:true,
  }
};
