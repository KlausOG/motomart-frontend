export interface UserDTO {
    id?: number; // Optional for new users
    username: string; // Required field
    email: string; // Required field
    password: string; // Required field
    role: string; // Required field
  }
  