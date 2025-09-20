export default function Footer(){
    const date = new Date().getFullYear()
    return(
        <div className="bg-gray-700 p-2">
            <div className="container m-auto">
                <p className="text-white">&copy; MediaStream by {date}</p>
            </div>
        </div>
    )
}