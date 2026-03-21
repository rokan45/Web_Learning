

export default function Albums() {
    
    console.log(albums);

    return (
        albums.map(album => (
            <Album album={album} key={album.id} />
        ))
    )
}