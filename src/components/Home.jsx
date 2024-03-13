import Banner from './Banner.jsx';
import Card from './Card.jsx';
import '../styles/home.css';
import sunnyImg from '../assets/sunny.png';


function Home() {
    
    // Mapping image 
    const weatherIcons = {
        sunny: sunnyImg,
    };


    const city = "London";
    const temp = 20;
    const weatherCondition = "Sunny";
    const feelTemp = 18;

    return (
        <>
            <Banner />
            <Card city={city.toUpperCase()} weatherIconSrc={weatherIcons["sunny"]} temp={temp} condition={weatherCondition.toUpperCase()} feelTemp={feelTemp} /> 
        </>
    );

}

export default Home;