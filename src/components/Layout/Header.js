import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import foodImg from '../../assets/food.jpg'
import classes from './Header.module.css'

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Foodies</h1>
        <HeaderCartButton />
      </header>
      <di className={classes['main-image']}>
        <img src={foodImg} alt='A table full of food!'/>
      </di>
    </Fragment>
  )
};

export default Header