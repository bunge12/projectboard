import React from "react";
import { Card, Stack, Text } from "@mantine/core";
import Item, { ItemProps } from "./Item";
interface PaneProps {
  title: string;
  items: Array<ItemProps>;
}

export default function Pane({ title, items }: PaneProps) {
  return (
    <Card style={{ width: "350px", backgroundColor: "lightgray" }}>
      <Card.Section>
        <Text size="lg">{title}</Text>
      </Card.Section>
      <Stack>
        {items.map((item) => {
          return (
            <Item
              name={item.name}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </Stack>
    </Card>
  );
}
