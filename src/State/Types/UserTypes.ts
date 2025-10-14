export interface IUser {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Manager" | "Customer"; // or whatever fits your app
  createdAt: string; // ISO date string
  isActive: boolean;
}
