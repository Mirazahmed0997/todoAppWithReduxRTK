import { selectTask, toggolCompleteState } from "@/State/Feature/Task/TaskSlice";
import { useAppDispatch, useAppSelector } from "@/State/hooks";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const Task = () => {

    const tasks= useAppSelector(selectTask)
    console.log(tasks)

    const dispatch= useAppDispatch()

    return (
        <div>
           <Table>
  <TableCaption>A list of your Todos.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead></TableHead>
      <TableHead className="w-[100px]">Title</TableHead>
      <TableHead>Description</TableHead>
      <TableHead>Priority</TableHead>
      <TableHead>Due Date</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
{
  tasks.map((task, i) => (
    <TableRow key={i}>
      <TableCell>{i + 1}</TableCell>
      <TableCell>{task.title}</TableCell>
      <TableCell>{task.description}</TableCell>
      <TableCell>
        {task.priority === "Low" ? (
          <div className="bg-green-500 text-white px-2 py-1 rounded">
            {task.priority}
          </div>
        ) : task.priority === "High" ? (
          <div className="bg-red-500 text-white px-2 py-1 rounded">
            {task.priority}
          </div>
        ) : (
          <div className="bg-yellow-500 text-white px-2 py-1 rounded">
            {task.priority}
          </div>
        )}
      </TableCell>
      <TableCell>{task.dueDate}</TableCell>
      <TableCell>
  <input
    type="checkbox"
    checked={task.isCompleted}
    onChange={() => dispatch(toggolCompleteState(task.id))}
    className="w-5 h-5 cursor-pointer accent-green-600"
  />
</TableCell>

      {/* <TableCell>{task.isCompleted ? "✅" : "❌"}</TableCell> */}
    </TableRow>
  ))
}

  </TableBody>
</Table>
        </div>
    );
};

export default Task;