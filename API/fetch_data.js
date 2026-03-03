//fetch data with onclick button using arrow function
const load = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(mydata => mydata.json())
        .then(json => console.log(json))
};


//function and fetch data for loadPost

const loadPost = () => {
    const link = "https://jsonplaceholder.typicode.com/posts";

    //fetch data from link
    fetch(link)
        .then(linkData => linkData.json())
        .then(json => displayPost(json))  //pass to another function
};

//display post from this function
const displayPost = (posts) => {
    //1. get the element
    const postConatiner = document.getElementById("post-container");

    // we can display each post itereating usin forEach function
    posts.forEach(post => {

        //2.create element and get post title
        const li = document.createElement("li");
        li.innerText = post.title;

        //3.append with parent element
        postConatiner.appendChild(li);

    });
}
