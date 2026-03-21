import { use } from "react"

export default function Album({albumdata}) {
    const albums = use(albumdata);
    console.log(albums);
    return (
        <div className="basic">
            <h3>Title Song: {albums.length}</h3>
        </div>
    )
}