import './style.css';
import logo from '../img/logo.png';
type Props = {
    name: string;
    age: number;
}


export const Header = () => {
    return (
        <header>
            <img src={logo} />
            <ul>
                <li>Teste</li>
                <li>Teste</li>
                <li>Teste</li>
            </ul>
        </header>
    );
}