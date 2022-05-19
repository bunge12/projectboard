import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Item from "../components/Item";

export default {
  title: "Board/Item",
  component: Item,
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = (args) => <Item {...args} />;

export const Default = Template.bind({});
Default.args = { x: 1 };
