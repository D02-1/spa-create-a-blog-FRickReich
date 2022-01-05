import { NavLink } from 'react-router-dom';

import './TopMenu.scss';

const TopMenu = () =>
{
    return(
        <header className="TopMenu">
            <ul>
                <li><NavLink to="/">Startseite</NavLink></li>
                <li><NavLink to="/post/create">Neuer Eintrag</NavLink></li>
                <li><NavLink to="/post/show">Alle Einträge</NavLink></li>
            </ul>
        </header>
    );
}

export default TopMenu;
