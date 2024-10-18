import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: {
    label: string;
    value: number;
    containers: Status;
  }[] = [
    { label: "Open Issues", value: open, containers: "OPEN" },
    {
      label: "In-progress Issues",
      value: inProgress,
      containers: "IN_PROGRESS",
    },
    { label: "Closed Issues", value: closed, containers: "CLOSED" },
  ];

  return (
    <Flex gap="4">
      {containers.map((containers) => (
        <Card key={containers.label}>
          <Flex direction="column" gap="1">
            <Link
              className="text-sm font-medium"
              href={`/issues/list?status=${containers.containers}`}
            >
              {containers.label}
            </Link>
            <Text size="5" className="font-bold">
              {containers.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
