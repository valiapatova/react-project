import SubPageMenuDark from "../SubPageMenuDark.jsx";
import HeaderSlider from "../HeaderSlider.jsx";
import InfoSection from "../InfoSection.jsx";
import Footer from "../Footer.jsx";
import HeaderMenuDark from "../HeaderMenuDark.jsx";

export default function PageHome(){
    return(
        <>
        <div className = "hero_area">
            <HeaderMenuDark/>
           <HeaderSlider/>
         </div>
            <InfoSection/>
            <Footer/>
            </>


    );
};