

export default function Albums({album}) {
    console.log(album);

    return (
        <div className="basic">
            <h2>UserID: {album.userId} </h2>
            <h3>Title: {album.title} </h3>
        </div>
    )
}