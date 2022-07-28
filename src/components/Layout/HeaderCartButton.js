import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
  return (
    <button class={classes.button}>
      <span class={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        3
      </span>
    </button>
  );
};

export default HeaderCartButton;