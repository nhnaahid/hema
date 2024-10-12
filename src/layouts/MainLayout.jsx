import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";

const MainLayout = () => {
    return (
        <div>
            <div className="h-32">
                <Navbar></Navbar>
            </div>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;