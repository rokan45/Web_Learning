

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
        <div className="mx-auto p-10 border-2 border-gray-100 grid grid-cols-3 gap-5">
           {
            data.map((da,index)=><div key={index} className="p-5 border-4 border-gray-100 shadow-md
            "> 
            <h1 className="text-2xl font-bold text-center">{da.title}</h1>
            <p className="mt-5 text-gray-300">{da.body}</p>
            </div>)
           }
        </div>
    );
};

export default PostPage;