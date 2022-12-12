import React from "react";

import { CoolerButton } from "./CoolerButton";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Cooler Button",
  component: CoolerButton,
};

const Template = (args) => <CoolerButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  mode: "light",
  label: "Hi Tim",
};

export const Secondary = Template.bind({});

Secondary.args = {
  primary: false,
  mode: "dark",
  label: "hi Simon",
};
