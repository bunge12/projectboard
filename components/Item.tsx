import React from "react";
import { Card, Text, Image } from "@mantine/core";

export interface ItemProps {
  name: string;
  description: string;
  image: string;
}

export default function Item({ name, description, image }: ItemProps) {
  return (
    <Card>
      <Card.Section>
        <Image
          src={image}
          width="100%"
          height="100%"
          sx={{ maxHeigh: "350px", maxWidth: "350px" }}
        />
      </Card.Section>
      <Text>{name}</Text>
      <Text>{description}</Text>
    </Card>
  );
}
