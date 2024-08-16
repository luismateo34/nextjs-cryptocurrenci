import type { Meta, StoryObj } from "@storybook/react";
import {GraficCircule} from "@/components/graficCircule";

const meta = {
  title: "Components/GraficCircule",
  component: GraficCircule,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof GraficCircule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    porcentaje: 60,
    title: "bitcoin",
    className: "bg-blue-900 mx-auto my-auto"
  }
};
export const Secundary: Story = {
  args: {
    porcentaje: 60,
    title: "bitcoin",
    className: "bg-violet-800 mx-auto my-auto"
  }
};

