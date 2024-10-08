/* eslint-disable react/prop-types */

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import { FaRegStar } from "react-icons/fa6";



const Product = ({ product }) => {
    // useGSAP(() => {
    //     gsap.to('.data', {
    //         opacity: 1,
    //         stagger: 0.25,
    //         duration: 0.5,
    //         ease: "elastic.inOut(1, 0.3)"
    //     })
    // },[])
    const { date, ratings, brandName, category, price, description, productImage, productName }= product
    return (
        <div className="max-w-xs mx-auto rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 data">
            <img src={productImage} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 data " />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2 text-start">
                    <div className="flex justify-between data ">
                        <h2 className="text-3xl font-semibold tracking-wide">{productName} </h2> 
                        <p className="flex items-center gap-1">
                            {ratings} <FaRegStar className=" relative -top-[2px]" />
                        </p>  
                    </div>
                    
                    <p className="dark:text-gray-800 data ">{description} </p>
                </div>
                <div className="text-start">
                    <p className=" data ">Category: {category} </p>
                    <p className=" data ">Brand: {brandName} </p>
                    <p className=" data ">Price: ${price} </p>
                    <p className=" data ">Added: {new Date(date).toLocaleString()} </p>
                    
               </div>
            </div>
        </div>
    );
};

export default Product;