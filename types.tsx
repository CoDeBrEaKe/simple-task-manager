export interface Task {
  title: string;
  description?: string;
  date?: string;
  status?: "completed" | "active";
}
