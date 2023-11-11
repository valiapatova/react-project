import NavigationMenuDark from "../NavigationMenuDark.jsx";
import About from "../About.jsx";
import InfoSection from "../InfoSection.jsx";
import Footer from "../Footer.jsx";

export default function PageAbout(){
    return(
        <div className = "sub_page">
            <NavigationMenuDark/>
            <About/>
            <InfoSection/>
            <Footer/>
        </div>

    );
};