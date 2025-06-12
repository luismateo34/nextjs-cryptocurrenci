import type { Meta, StoryObj } from "@storybook/react";
import { LinearGraf } from "./LinearGrafTest";
const meta = {
  title: "Components/GraficLine",
  component: LinearGraf,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof LinearGraf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    borderColor: ["rgba(248, 253, 3, 1)"],
    borderWidth: 2,
    data: ["1", "2", "3", "12", "32", "11", "9"],
    label: "crypto",
    labels: ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete"],
    primary: true,
  },
};
export const Secundary: Story = {
  args: {
    borderColor: ["rgba(255, 101, 0, 1)"],
    borderWidth: 4,
    data: ["1", "2", "3", "12", "32", "11", "9"],
    label: "crypto",
    labels: ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete"],
    secundary: true,
  },
};
