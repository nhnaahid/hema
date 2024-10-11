import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;