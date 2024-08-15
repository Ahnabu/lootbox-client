import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
    },[])
   
    return (
        <div className="text-center">
            <h2 id="title" className="text-4xl mx-auto opacity-0 translate-y-2 transition-all text-black pt-20 md:pt-24">LootBox</h2>
            <p id="text" className="text-xl mx-auto opacity-0 translate-y-2 transition-all text-black pt-3 "> Discover a curated collection of top-quality products, all in one place. LootBox brings you the best deals, trusted brands, and a seamless shopping experience tailored just for you.</p>
          
            
        </div>
    );
};

export default Products;