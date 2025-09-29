import connectToDb from "@/lib/db";
import AddSlideForm from "../components/admin/Layout/AddSlides";

export default async function AdminHomePage() {
  // Run DB connection (server side)
  await connectToDb();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
      {/* ✅ Client Component usage */}
      <AddSlideForm />
    </div>
  );
}
