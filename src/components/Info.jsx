import '../styles/info.css';
import sunriseImg from '../assets/sunrise.png'
import sunsetImg from '../assets/sunset.png'
import SunriseSunset from './SunriseSunset';

function Info() {

    return(
        <>
            <h1>INFO PAGE</h1>
            <SunriseSunset sunriseIcon={sunriseImg} sunsetIcon={sunsetImg} sunriseTime="06:25" sunsetTime="19:40"/>
        </>
    );

}

export default Info;