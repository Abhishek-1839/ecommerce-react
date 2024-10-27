import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/cartSlices';

const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const addProductToCart = (product) => {
    dispatch(addToCart(product));
  };

  const removeProductFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return {
    cart,
    addProductToCart,
    removeProductFromCart,
  };
};

export default useCart;
