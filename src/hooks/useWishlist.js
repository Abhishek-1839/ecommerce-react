import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '../store/wishlistSlice';

const useWishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  const toggleProductWishlist = (id) => {
    dispatch(toggleWishlist(id));
  };

  return {
    wishlist,
    toggleProductWishlist,
  };
};

export default useWishlist;
