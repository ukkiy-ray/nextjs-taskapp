import { NextResponse } from "next/server";

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const tasks: Task[] = [
  { id: 1, title: "Task 1", description: "Description 1", completed: false },
  { id: 2, title: "Task 2", description: "Description 2", completed: false },
  { id: 3, title: "Task 3", description: "Description 3", completed: false },
];

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const GET = async () => {
  await sleep(3000);
  return NextResponse.json({ tasks }, { status: 200 });
};

export const dynamic = "force-dynamic";
