import { Task } from "../../api/tasks/route";

const getTasks = async () => {
  const response = await fetch("http://localhost:3000/api/tasks", {
    method: "GET",
    cache: "no-store",
  });
  const data = await response.json();
  return data;
};

const TaskPage = async () => {
  const tasks = (await getTasks()).tasks as Task[];
  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskPage;
