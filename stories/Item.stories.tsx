import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Item from "../components/Item";

export default {
  title: "Board/Item",
  component: Item,
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = (args) => <Item {...args} />;

const data = {
  name: "Item Name",
  description: "Item Description",
  image: "https://via.placeholder.com/300",
};

export const Default = Template.bind({});
Default.args = { ...data };
