import Footer from "../Footer/Footer";
import { StickyNavbar } from "./Navbar/Navbar";
import Products from "./Products/Products";


const Home = () => {
    return (
        <div className="container w-full max-w-[1280px] mx-auto">
            <StickyNavbar />
            <Products />
            <Footer/>
        </div>
    );
};

export default Home;