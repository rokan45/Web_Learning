

 // 1.
    // const postData = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data=await postData.json();
    // console.log(data)


    // 2.
    const getPost=async()=>{
        const res= await fetch('https://jsonplaceholder.typicode.com/posts');
        return res.json();
    }

const PostPage = async () => {

    const data= await getPost();
    console.log(data)


    return (
        <div>
            <h1>Hey Im here!{data.length}</h1>
        </div>
    );
};

export default PostPage;