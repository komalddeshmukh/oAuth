import {useEffect} from 'react'
import HeroSection from '../components/HeroSection';
import { useGlobalContext } from '../Context';

const About = () => {
    const{updateAboutPage}=useGlobalContext();
    
    useEffect(()=>updateAboutPage(), []);

    return <HeroSection />;
};

export default About