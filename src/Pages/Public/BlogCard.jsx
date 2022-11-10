import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {
    const {title, details, image, author} = blog;
    return (

<div className="bg-blue-50 rounded-xl">
	<div className="container grid grid-cols-12 border my-5 mx-auto dark:bg-gray-900">
		<div className="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4" >
           <img src={image} alt="" />
        </div>
		<div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
			
	
             <div className="dark:bg-gray-800 dark:text-gray-100">
         <div className="container max-w-4xl px-10 py-6 mx-auto  shadow-sm dark:bg-gray-900">
       <div className="flex items-center justify-between">
             <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
            <Link rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900"></Link>
           </div>
           <div className="mt-3">
             <Link rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">{title}</Link>
             <p className="mt-2">{details.slice(0, 100)}...</p>
           </div>
           <div className="flex items-center justify-between mt-4">
             
             <div>
               <Link rel="noopener noreferrer" href="#" className="flex items-center">
                 <img src={author.image} alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
               <span className="hover:underline dark:text-gray-400">{author.name}</span>
             </Link>
          </div>
          <Link rel="noopener noreferrer" href="#" className="hover:underline hover:text-violet-400">Read more</Link>
         </div>
        </div>
      </div>


		</div>
	</div>
</div>












    //     <div className="dark:bg-gray-800 dark:text-gray-100">
    //     <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
    //       <div className="flex items-center justify-between">
    //         <span className="text-sm dark:text-gray-400">Jun 1, 2020</span>
    //         <Link rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">Javascript</Link>
    //       </div>
    //       <div className="mt-3">
    //         <Link rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Nos creasse pendere crescit angelos etc</Link>
    //         <p className="mt-2">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
    //       </div>
    //       <div className="flex items-center justify-between mt-4">
    //         <Link rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</Link>
    //         <div>
    //           <Link rel="noopener noreferrer" href="#" className="flex items-center">
    //             <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
    //             <span className="hover:underline dark:text-gray-400">Leroy Jenkins</span>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    );
};

export default BlogCard;