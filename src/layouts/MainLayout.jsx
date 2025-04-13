import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

function MainLayout({ children }) {


    return (
        <>
            <Navbar />
            <div className="mt-[100px]">
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default MainLayout