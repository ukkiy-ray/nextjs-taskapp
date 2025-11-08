"use server";

export interface FormState {
  error: string;
}

export const addTask = async (
  taskId: number,
  state: FormState,
  formData: FormData
): Promise<FormState> => {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const task = { id: taskId, title, description };
  console.log(task);
  return { error: "Error:Task added successfully" };
};

export const addTaskWithId = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const taskId = 1; // または formData から取得
  return await addTask(taskId, prevState, formData);
};
