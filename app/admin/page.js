import connectToDb from "@/lib/db"
import AddSlideForm from "../components/admin/Layout/AddSlides"

export default async function AdminHomePage() {
  console.log("hello")
    await connectToDb()
    return <>
      <h1>Admin Page</h1>
      <AddSlideForm />
    </>
}