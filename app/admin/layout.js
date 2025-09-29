import AdminShell from "./AdminShell";

export const metadata = {
  title: "Admin Dashboard | StreamixWorld",
  description:
    "Manage users, campaigns, and content securely from the admin dashboard.",
};

export default function AdminLayout({ children }) {
  return (
        <AdminShell>{children}</AdminShell>
  );
}
