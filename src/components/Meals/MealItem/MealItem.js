import MealItemForm from './MealItemForm'
import classes from './MealItem.module.css'

const MealItem = props => {

  // 항상 소수점 이하 두 자리 수까지만 렌더링
  const price = `$${props.price.toFixed(2)}`

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
        <MealItemForm id={props.id} />
      </div>
    </li>
  )
}

export default MealItem;