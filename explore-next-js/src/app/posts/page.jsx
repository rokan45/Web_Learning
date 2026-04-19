

const PostPage = async () => {

    // 1.
    // const postData = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data=await postData.json();
    // console.log(data)


    // 2.
    const getPost=async()=>{
        const res= await fetch('https://jsonplaceholder.typicode.com/posts');
        return res.json();
    }


    return (
        <div>
            <h1>Hey Im here {data.length}!</h1>
        </div>
    );
};

export default PostPage;