import { use } from "react"
import Albums from './albums'

export default function Album({albumdata}) {
    const albums = use(albumdata);
    // console.log(albums);


    return (
        <div className="basic">
            <h3>Album List: {albums.length}</h3>
            {
                albums.map(album=> <Albums album={album} ></Albums>)
            }
        </div>
    )
}