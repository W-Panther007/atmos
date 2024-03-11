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
    const temp = 18;
    const weatherCondition = "Sunny";
    const feelTemp = 16;

    return (
        <>
            <Banner />
            <Card city={city.toUpperCase()} weatherIconSrc={weatherIcons["sunny"]} temp={temp} condition={weatherCondition.toUpperCase()} feelTemp={feelTemp} /> 
        </>
    );

}

export default Home;