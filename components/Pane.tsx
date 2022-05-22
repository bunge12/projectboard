import React from "react";
import { Card, Text } from "@mantine/core";
// import type ItemProps from "./Item";
import { ItemProps } from "./Item";
interface PaneProps {
  item: Array<ItemProps>;
}

export default function Pane({ item }: PaneProps) {
  return (
    <Card>
      <Card.Section>
        <Text>Pane Title</Text>
      </Card.Section>
    </Card>
  );
}
