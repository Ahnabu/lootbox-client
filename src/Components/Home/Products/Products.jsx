import { useGSAP } from "@gsap/react";
import axios from "axios";
import gsap from "gsap";
import { useState } from "react";
import Product from "./Product";
import { useQuery } from "@tanstack/react-query";

import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
const Products = () => {
    useGSAP(() => {
        gsap.to('#title', {
            opacity: 1,
            delay: 1,
            duration: 1.5,
            y: 0
            
        })
        gsap.to('#text', {
            opacity: 1,
            delay: 1.5,
            duration: 1.5,
            y: 0
            
        })
        gsap.to('.data', {
            opacity: 1,
            stagger: 0.5,
            duration: 0.8,
            ease: "elastic.inOut(1, 0.3)"
        })
    }, [])
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState('')
    const [sortOrder, setSortOrder] = useState('');

    const { data: cards = [], refetch } = useQuery({
        queryKey: ['cards'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/data?filter=${filter}&sort=${sort}&order=${sortOrder}`);
            console.log(res.data);
            return res.data;
        },
        cacheTime: 0, // Disabling cache for 'cards' query
    });


    const [isTwo, setIsTwo] = useState(false)

    const handleFilter = (e) => {
        e.preventDefault();
        const filter = e.target.search.value;
        setFilter(filter)
        refetch()
    }

    // useEffect(() => {
    //     axios.get('/data.json')
    //         .then(response => setData(response.data));
        
    // }, [])
    // console.log(data);
    return (
        <div className="text-center">
            <h2 id="title" className="text-4xl mx-auto opacity-0 translate-y-2 transition-all text-black pt-20 md:pt-24">LootBox</h2>
            <p id="text" className="text-xl mx-auto opacity-0 translate-y-2 transition-all text-black pt-3 "> Discover a curated collection of top-quality products, all in one place. LootBox brings you the best deals, trusted brands, and a seamless shopping experience tailored just for you.</p>

            <div className="my-4 md:flex justify-center gap-8 ">
                <Button className="text-white font-bold bg-primary hidden lg:block " onClick={() => { setIsTwo(!isTwo) }}>{isTwo ? 'Switch to three column' : 'Switch to two column'}</Button>
                <div className="text-center md:mr-20  ">
                    <form className="w-32 space-y-1 dark:text-gray-800 mx-auto" onSubmit={handleFilter}>
                        <label htmlFor="Search" className="hidden">Search</label>
                        <div className="relative mx-auto">
                            <input type="search" name="search" placeholder="Search camp names..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none text-black bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600" />
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">

                                <button type="submit" title="search" className="p-1  focus:outline-none focus:ring">
                                    <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800 text-primary">
                                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                    </svg>
                                </button>
                            </span>

                        </div>
                    </form>
                </div>
                <div>
                    <Menu>
                        <MenuHandler>
                            <Button className="bg-primary  text-white w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200">{sort ? `${sort}` : 'Sort'}</Button>
                        </MenuHandler>
                        <MenuList className="bg-primary bg-opacity-45">
                            <MenuItem value={'participantCount'}
                                onClick={() => { setSort('participantCount'), refetch() }} className="bg-primary bg-opacity-55 text-white" >Most Registered</MenuItem>
                            <MenuItem value={'campFees'}
                                className="bg-primary bg-opacity-55 text-white" onClick={() => { setSort('campFees'), refetch() }}
                            > Camp Fees</MenuItem>
                            <MenuItem value={'campName'}
                                className="bg-primary bg-opacity-55 text-white"
                                onClick={() => { setSort('campName'), refetch() }}>Camp Name</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
                <div>
                    <Menu>
                        <MenuHandler>
                            <Button className="bg-primary  text-white w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200">{sortOrder ? `${sortOrder}` : 'Order'}</Button>
                        </MenuHandler>
                        <MenuList className="bg-primary bg-opacity-45">
                            <MenuItem value={'asc'}
                                onClick={() => { setSortOrder('asc') }} className="bg-primary bg-opacity-55 text-white" >Ascending</MenuItem>
                            <MenuItem value={'des'}
                                className="bg-primary bg-opacity-55 text-white" onClick={() => { setSortOrder('desc') }}
                            > Descending</MenuItem>

                        </MenuList>
                    </Menu>
                </div>

            </div>
            <div className="mx-auto pt-4 md:pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {cards.map(product => (
                    <Product key={product.productName} product={product} className='data'>
                       
                    </Product>
                ))}
            </div>
        </div>
    );
};

export default Products;