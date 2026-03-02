//fetch data with onclick button using arrow function
const load = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(mydata => mydata.json())
        .then(json => console.log(json))
}
