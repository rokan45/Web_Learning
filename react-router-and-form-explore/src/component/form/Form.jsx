import React, { useRef } from 'react';

const Form = () => {


    // const emailRef=useRef('');
  

    // const handleOnSubmit=(e)=>{
    //     e.preventDefault();
    //     // 1st Way: e.target.[name of the input field].value
    //     console.log(e.target.email.value)

    // 3rd way:emailRef.current.[name of the ]
    //     console.log(emailRef.current.value)
    // }


    const handleOnAction=(formData)=>{
     
        // 2nd Way: parameter.get('name of the input field')
        console.log(formData.get('email'))
    }

    return (
        <div className='p-25'>

            {/* <form onSubmit={handleOnSubmit} className='' action=""> */}

            <form className='' action={handleOnAction}>
                <div className='p-2 mr-2 gap-3'>
                    <label className='mr-2'>Email</label>
                    {/* 3rd way */}
                    {/* <input ref={emailRef} className='border-2 border-black rounded-md' type="email" name="email" id="" placeholder='Enter your mail' /> */}

                    <input className='border-2 border-black rounded-md' type="email" name="email" id="" placeholder='Enter your mail' />
                </div>
                <div className='p-2 mr-2'>
                    <label className='mr-2'>Post</label>
                    <input className='border-2 border-black rounded-md' type="text" name="" id="" placeholder='Post here' />
                </div>
                <input className='btn mt-4' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Form;