export interface Task {
  title: string;
  description?: string;
  date?: Date;
  status?: "completed" | "active";
}
