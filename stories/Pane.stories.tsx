import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Pane from "../components/Pane";

export default {
  title: "Board/Pane",
  component: Pane,
} as ComponentMeta<typeof Pane>;

const Template: ComponentStory<typeof Pane> = (args) => <Pane {...args} />;

const item = {
  name: "Item Name",
  description: "Item Description",
  image: "https://via.placeholder.com/300",
};

export const Default = Template.bind({});
Default.args = { title: "To-Do", items: [item, item, item] };
