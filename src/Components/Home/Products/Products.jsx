import { useGSAP } from "@gsap/react";
import axios from "axios";
import gsap from "gsap";
import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
    useGSAP(() => {
        gsap.to('#title', {
            opacity: 1,
            delay: 1,
            duration: 1.5,
            y:0
            
        }) 
        gsap.to('#text', {
            opacity: 1,
            delay: 1.5,
            duration: 1.5,
            y:0
            
        }) 
        gsap.to('.data', {
            opacity: 1,
            stagger: 0.5,
            duration: 0.8,
            ease: "elastic.inOut(1, 0.3)"
        })
    }, [])
    const [data, setData]=useState([])
    useEffect(() => {
        axios.get('/data.json')
            .then(response => setData(response.data));
        
    }, [])
    console.log(data);
    return (
        <div className="text-center">
            <h2 id="title" className="text-4xl mx-auto opacity-0 translate-y-2 transition-all text-black pt-20 md:pt-24">LootBox</h2>
            <p id="text" className="text-xl mx-auto opacity-0 translate-y-2 transition-all text-black pt-3 "> Discover a curated collection of top-quality products, all in one place. LootBox brings you the best deals, trusted brands, and a seamless shopping experience tailored just for you.</p>
          
            <div className="mx-auto pt-4 md:pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {data.map(product => (
                    <Product key={product.productName} product={product} className='data'>
                       
                    </Product>
                ))}
            </div>
        </div>
    );
};

export default Products;