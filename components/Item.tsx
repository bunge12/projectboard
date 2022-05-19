import React from "react";
import { Card, Text, Image } from "@mantine/core";

type Props = {
  name: string;
  description: string;
  image: string;
};

export default function Item({ name, description, image }: Props) {
  return (
    <Card>
      <Card.Section>
        <Image src={image} width={300} height={300} />
      </Card.Section>
      <Text>{name}</Text>
      <Text>{description}</Text>
    </Card>
  );
}
