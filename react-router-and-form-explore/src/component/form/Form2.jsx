import React from 'react';

const Form2 = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Form Data Object:", data);
    };

    return (
        <form className='' onSubmit={handleSubmit}>
            <div className='p-2 mr-2 gap-3'>
                <label className='mr-2'>Email</label>

                <input className='border-2 border-black rounded-md' type="email" name="email" id="" placeholder='Enter your mail' />
            </div>
            <div className='p-2 mr-2'>
                <label className='mr-2'>Review</label>
                <input className='border-2 border-black rounded-md' type="Review" name="post" id="" placeholder='Post here' />
            </div>
            <input className='btn mt-4' type="submit" value="Submit" />
        </form>

    );
};

export default Form2;