
import { Link } from "react-router-dom"

function NewCard({ data }) {
  const apiURL = import.meta.env.VITE_API_BASE_URL;



    return (
        <Link to={data.newLink} style={{backgroundColor: "white"}} className="bg-white select-none w-full shadow-md flex flex-col gap-4 cursor-pointer hover:text-[var(--secondary)] group overflow-hidden rounded-md hover:shadow-lg transition duration-300">
            <img
                src={apiURL + '/api/image/' + data.newImage}
                alt="new_image"
                className="transition-transform duration-300 group-hover:scale-105 shadow-md"
            />
            <div className="px-4 pb-4">
                <b className="clamp-p transition duration-300">{data.newTitle}</b>
            </div>
        </Link>
    )
}

export default NewCard