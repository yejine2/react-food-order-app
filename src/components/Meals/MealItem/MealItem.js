import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  // 항상 소수점 이하 두 자리 수까지만 렌더링
  const price = `$${props.price.toFixed(2)}`;

  // 컨텍스트 접근
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      {/* AvailableMeals DUMMY_MEALS에서 prop을 가져올 것 */}
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      {/* 수량을 사용자가 입력할 수 있게하는 컴포넌트와 장바구니 추가 버튼 */}
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
