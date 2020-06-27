import React from 'react';
import './header.styles.scss';
import logo from '../../assets/eka_logo.png';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';
import {ReactComponent as CartIcon} from '../../assets/bag.svg';


const Header = () => (
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

    <nav className='mainNavBar'>
      <ul className="horizontalList">
        <li className='horizontalListItem'>
          <a href=''>ABOUT US</a>
        </li>
        <li className='horizontalListItem'>
          <a href=''>NEW ARRIVALS</a>
        </li>
        <li className='horizontalListItem'>
          <a href=''>SHOP ALL</a>
        </li>
        <li className='horizontalListItem'>
          <a href=''>STOCKISTS</a>
        </li>
        <li className='horizontalListItem'>
          <a href=''>CONTACT US</a>
        </li>
      </ul>
    </nav>

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

export default Header;
