import React from 'react';
import {BrowserRouter as Router,Route, NavLink } from 'react-router-dom'
import './header.styles.scss';

import AboutPage  from '../../pages/about/about.component';
import HomePage from '../../pages/homepage/homepage.component';

import logo from '../../assets/eka_logo.png';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';
import {ReactComponent as CartIcon} from '../../assets/bag.svg';


const Header = () => {
  return(
  <div className='header'>
    <div className='headerFlexItem select'>
      <select name="currency" className='currencySelector'>
        <option value='INR'>INR</option>
        <option value='INR'>USD</option>
        <option value='INR'>GBP</option>
        <option value='INR'>EUR</option>
        <option value='INR'>CAD</option>
      </select>
    </div>
    <Router>
    <nav className='mainNavBar'>
      <ul className="horizontalList">
        <li className='horizontalListItem'>
          <NavLink to='/about-us' activeClassName='selectedLink'>ABOUT US
          </NavLink>
        </li>
        <li className='horizontalListItem'>
          <NavLink to='/new-arrivals'>NEW ARRIVALS</NavLink>
        </li>
        <li className='horizontalListItem'>
          <NavLink to='/shop'>SHOP ALL</NavLink>
        </li>
        <li className='horizontalListItem'>
          <NavLink to='/stockists'>STOCKISTS</NavLink>
        </li>
        <li className='horizontalListItem'>
          <NavLink to='contact-us'>CONTACT US</NavLink>
        </li>
      </ul>
    </nav>
     <Route exact path='/' component={HomePage} />
     <Route exact path='/about-us' component={AboutPage} />

    </Router>

    <div className='headerFlexItem logoContainer'>
    <img src={logo} alt="Logo" className="logo"/>
    </div>

    <div className='headerFlexItem'>
    <UserIcon className='flexIcon'/>
    <SearchIcon className= 'flexIcon'/>
    <CartIcon className='cartIcon flexIcon'/>
    </div>

  </div>
 );

}

export default Header;
