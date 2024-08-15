import { StickyNavbar } from "./Navbar/Navbar";
import Products from "./Products/Products";


const Home = () => {
    return (
        <div className="container max-w-[1280px] mx-auto">
            <StickyNavbar />
            <Products/>
        </div>
    );
};

export default Home;