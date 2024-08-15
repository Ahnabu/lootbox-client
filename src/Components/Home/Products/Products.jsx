import { useGSAP } from "@gsap/react";
import axios from "axios";
import gsap from "gsap";
import { useEffect, useState } from "react";
import Product from "./Product";
import { useQuery } from "@tanstack/react-query";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import './styles.css'
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
        
    }, [])
    const [filter, setFilter] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    const [sortOrder, setSortOrder] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(10);
    const { data: cards = [], refetch } = useQuery({
        queryKey: ['cards'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/data?filter=${filter}&sort=${sort}&order=${sortOrder}`, {
                params: {
                    minPrice: minPrice || undefined,
                    maxPrice: maxPrice || undefined,
                    brand: brand,
                    category: category,
                    currentPage:currentPage
                }
            })
               
            return res.data;
        },
        cacheTime: 0, // Disabling cache for 'cards' query
    });

    useEffect(() => {
        axios.get(`http://localhost:5000/data-count`)
            .then(data => {
                setCount(data.data.count)
            }).catch(error => console.log(error))
    }, [currentPage])
    const numbersOfPage = Math.ceil(count /10)
    //   Fetch participants Data
   
    const pages = [...Array(numbersOfPage).keys()]




    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            refetch()
        }
    }
    const handleNext = () => {
        if (currentPage < numbersOfPage) {
            setCurrentPage(currentPage + 1)
            refetch()
        }
    }


    const handleFilter = (e) => {
        e.preventDefault();
        const filter = e.target.search.value;
        setFilter(filter)
        refetch()
    }
    const handleBrand = (e) => {
        e.preventDefault();
        const Brand = e.target.search.value;
        setBrand(Brand)
        refetch()
    }
    const handleCategory = (e) => {
        e.preventDefault();
        const Category = e.target.search.value;
        setCategory(Category)
        refetch()
    }
    const handleMinMax = () => {
        refetch()
    }
    
    return (
        <div className="text-center ">
            <h2 id="title" className="text-4xl mx-auto opacity-0 translate-y-2 transition-all text-black pt-20 md:pt-24">LootBox</h2>
            <p id="text" className="text-xl mx-auto opacity-0 translate-y-2 transition-all text-black pt-3 "> Discover a curated collection of top-quality products, all in one place. LootBox brings you the best deals, trusted brands, and a seamless shopping experience tailored just for you.</p>

            <div className="my-4 md:flex justify-center items-center gap-8 ">
               
                <div className="text-center md:mr-20  ">
                    <form className="w-32 space-y-1 dark:text-gray-800 mx-auto" onSubmit={handleFilter}>
                        <label htmlFor="Search" className="hidden">Search</label>
                        <div className="relative mx-auto">
                            <input type="search" name="search" placeholder="Search product name..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none text-black bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600" />
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
                <div className="text-center md:mr-20  ">
                    <form className="w-32 space-y-1 dark:text-gray-800 mx-auto" onSubmit={handleBrand}>
                        <label htmlFor="Search" className="hidden">Search</label>
                        <div className="relative mx-auto">
                            <input type="search" name="search" placeholder="Search brand..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none text-black bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600" />
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
                <div className="text-center md:mr-20  ">
                    <form className="w-32 space-y-1 dark:text-gray-800 mx-auto" onSubmit={handleCategory}>
                        <label htmlFor="Search" className="hidden">Search</label>
                        <div className="relative mx-auto">
                            <input type="search" name="search" placeholder="Search category..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none text-black bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600" />
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
                            <MenuItem value={'price'}
                                onClick={() => { setSort('price'), refetch() }} className="bg-primary bg-opacity-55 text-white" >Price </MenuItem>
                            
                            <MenuItem value={'date'}
                                className="bg-primary bg-opacity-55 mt-4 text-white"
                                onClick={() => { setSort('date'), refetch() }}>Date</MenuItem>
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
                <div className="md:flex gap-3 items-center">
                    <div className="flex flex-col gap-2">
                        <input
                        type="number"
                        placeholder="Min Price"
                        className="w-12 py-2 pl-4 text-sm rounded-md sm:w-auto focus:outline-none text-black bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600" 
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        className="w-12 py-2 pl-4 text-sm rounded-md sm:w-auto focus:outline-none text-black bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600" 
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    </div>
                    
                    <Button className="bg-primary text-white" onClick={handleMinMax}>Filter</Button>
                </div>

            </div>
            <div className="mx-auto pt-4 md:pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {cards.map(product => (
                    <Product key={product.productName} product={product} className='data'>
                       
                    </Product>
                ))}
            </div>
            <div className="mt-6 mb-4">
                    <div className="flex justify-center space-x-1 px-2 dark:text-gray-800 pagination">
                        <button title="previous" type="button" className="w-8 h-8 py-0 px-2 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100 bg-primary" onClick={handlePrev}>
                            <GrFormPrevious className='text-2xl text-white'></GrFormPrevious>
                        </button>
                        {
                            pages.map(page => <button key={page} onClick={() => { setCurrentPage(page + 1), refetch() }} type="button" title={`Page ${page + 1}`}
                                className={currentPage === page + 1 && 'selected'}
                            // className='selected'
                            >{page + 1} </button>)
                        }

                        <button title="next" type="button" onClick={handleNext} className="px-2 text-center mx-auto w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-50 dark:border-gray-100 bg-primary">
                            <GrFormNext className='text-2xl text-white'></GrFormNext>
                        </button>
                    </div>

                </div>
        </div>
    );
};

export default Products;