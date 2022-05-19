import React from "react";
import { Card } from "@mantine/core";

interface PaneProps {
  x: number;
}

export default function Pane({ x }: PaneProps) {
  return (
    <Card>
      <Card.Section>Pane Title {x}</Card.Section>
    </Card>
  );
}
