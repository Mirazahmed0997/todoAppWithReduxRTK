

export interface ITask {
  id: string;
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  dueDate: string;
  isCompleted: boolean;
}


 