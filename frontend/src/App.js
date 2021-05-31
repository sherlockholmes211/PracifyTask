import './App.css';
import Cards from './Components/Cards/Cards';
import ClientsLogo from './Components/ClientsLogo/ClientsLogo';
import HeroContent from './Components/HeroContent/HeroContent';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import SectionWrapper from './Components/SectionWrapper/SectionWrapper';
import leaf from './Assets/imgs/Group 114.png'
import quot from './Assets/imgs/Group 86.png'
import ImageSection from './Components/ImageSection/ImageSection';
import { NewSection } from './Components/NewSection/NewSection';
import CardsSection from './Components/CardsSection/CardsSection';
import Footer from './Components/Footer/Footer';
import PositionImage from './Components/PositionImage/PositionImage';

function App() {
  return (
    
    <div>
      <PositionImage/>
      <HeroContent/>
      
      <SectionWrapper img={leaf} title="Welcome to Nature" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua."/>
      <Cards/>
      <div style={{backgroundColor:"#fbfefe"}}>
        <SectionTitle title="Proudly presented by" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
  incididunt ut labore et dolore magna aliqua."/>
        <ClientsLogo/>
        <ImageSection/>
        <NewSection/>
        <CardsSection/>
        <Footer/>


      </div>

    </div>
    
  );
}

export default App;
