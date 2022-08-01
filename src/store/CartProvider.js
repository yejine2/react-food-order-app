import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// 장바구니 데이터 상태 관리
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // 메뉴가 이미 장바구니에 들어있는지 확인
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // 해당 항목이 존재 하는 경우에만 작동, 없다면 null 반환
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    // 장바구니 항목 존재 여부 조건문
    if (existingCartItem) {
      const updatedItem = {
        // existingCartItem를 복사해서 수량 업데이트
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      // 수량이 업데이트 되었다면 이전 객체를 복사하는 새 배열로 만들어준다.
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

// CartContext 데이터를 관리하고, 그 컨텍스트를 접근하려는 모든 컴포넌트에 제공하는 역할
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
