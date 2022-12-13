import React from "react";

import { Subheading } from "./Subheading";

export default {
  title: "Subheading",
  component: Subheading,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Subheading {...args} />;

export const Welcome = Template.bind({});
Welcome.args = {
  label: "Welcome!"
};

export const Lesson = Template.bind({});
Lesson.args = {
    label: "React-Router: useSearchParams"
};
