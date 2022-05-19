import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Pane from "../components/Pane";

export default {
  title: "Board/Pane",
  component: Pane,
} as ComponentMeta<typeof Pane>;

const Template: ComponentStory<typeof Pane> = (args) => <Pane {...args} />;

export const Default = Template.bind({});
Default.args = { x: 1 };
