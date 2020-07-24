import React from 'react';
import {Link } from 'react-router-dom'
import './header.styles.scss';

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


        <div className='headerFlexItem logoContainer'>
        <Link to='/'>
        <img src={logo} alt="Logo" className="logo"/>
        </Link>
        </div>

        <div className='headerFlexItem headerOptions'>
        <UserIcon className='flexIcon'/>
        <SearchIcon className= 'flexIcon'/>
        <CartIcon className='cartIcon flexIcon'/>
        </div>

    <nav className='mainNavBar'>
      <ul className="horizontalList">
        <li className='horizontalListItem'>
          <Link to='/about-us' className='selectedLink'>ESSENCE</Link>
        </li>
        <li className='horizontalListItem'>
          <Link to='/new-arrivals' className='selectedLink'>NEW ARRIVALS</Link>
        </li>
        <li className='horizontalListItem'>
          <Link to='/shop' className='selectedLink'>SHOP ALL</Link>
        </li>
        <li className='horizontalListItem'>
          <Link to='/stockists' className='selectedLink' >STOCKISTS</Link>
        </li>
        <li className='horizontalListItem'>
          <Link to='contact-us' className='selectedLink'>CONTACT US</Link>
        </li>
      </ul>
    </nav>

  </div>
 );

}

export default Header;
