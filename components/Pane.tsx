import React from "react";
import { Card } from "@mantine/core";

interface Props {}

export default function Pane({}: Props) {
  return (
    <Card>
      <Card.Section>Pane Title</Card.Section>
    </Card>
  );
}
