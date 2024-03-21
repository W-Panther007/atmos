import '../styles/info.css';
import sunriseImg from '../assets/sunrise.png'
import sunsetImg from '../assets/sunset.png'
import SunriseSunset from './SunriseSunset';

function Info() {

    const loc = 'london'

    return(
        <>
            <h1>INFO PAGE</h1>
            <SunriseSunset sunriseIcon={sunriseImg} sunsetIcon={sunsetImg} location={loc}/>
        </>
    );

}

export default Info;