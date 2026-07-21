// Roles the Auth page itself needs to know about.
// "admin" (the 3rd role) intentionally has no UI here — admins are
// provisioned directly in the backend/DB, not through public self-register.
export type UserRole = "customer" | "shop";
 
export type AuthFormProps = {
  setIsLogin: (value: boolean) => void;
};
 