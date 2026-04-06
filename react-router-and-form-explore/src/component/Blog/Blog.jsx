import React from 'react';

const Blog = () => {
    return (
        <div>
            <div class="flex justify-center items-center w-full  mx-auto gap-24 py-24">
               
                <div class="w-152.5 h-55">
                    <h2 class="text-4xl font-bold leading-20">Featured products at one place</h2>
                    <p class="text-balance text-[1rem] font-bold text-[#6C6C6C]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button
                        class="bg-[#E02C6D] border border-none w-38.75 h-11 px-2 py-2 text-[#FFFFFF] mt-6 gap-3 justify-center"
                    >
                        Join Now <i class="fa-solid fa-arrow-right ml-2"></i>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Blog;