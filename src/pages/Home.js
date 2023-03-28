import HeroScetion from "../components/HeroSection";
import ImproveSkills from "../components/ImproveSkills";
import QuoteSection from "../components/QuoteSection";
import ChefsSection from "../components/ChefsSection";


export default function Home(){
    return(
       <div>
            <HeroScetion />
            <ImproveSkills />
            <QuoteSection />
            <ChefsSection />
       </div>
    )
}