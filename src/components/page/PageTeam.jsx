import NavigationMenuDark from "../NavigationMenuDark.jsx";
import Team from "../Team.jsx";
import InfoSection from "../InfoSection.jsx";
import Footer from "../Footer.jsx";

export default function PageAbout(){
    return(
        <div className = "sub_page">
            <NavigationMenuDark/>
            <Team/>
            <InfoSection/>
            <Footer/>
        </div>

    );
};