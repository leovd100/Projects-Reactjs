import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import './style.css';
import {ButtonNext} from '../button/button';

export const Main = () => {

    


    return (
        <div className="principalContent">
            <img src={img1} />
            <ButtonNext orientation="left"/>
            <ButtonNext orientation="right"/>
        </div>
    )
}