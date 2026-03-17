export default function Book({book}){
    console.log(book)
    return(
        <div className="student">
            <h4>Name: {book.name} </h4>
            <h2>Genere: {book.genere} </h2>
        </div>
    )
}