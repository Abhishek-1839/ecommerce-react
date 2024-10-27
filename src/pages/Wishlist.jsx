import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

import './cart.css';

const Wishlist = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    // const [name, setName] = useState('');
    // const [address, setAddress] = useState('');
    // const [pinCode, setPinCode] = useState('');
    // const [phone, setPhone] = useState('');

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

   

    // const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);

    return (
        <div className="cartContainer">
            <div className="cartContent">
                <h3>Cart</h3>
                <div className="cartWrapper">
                    {products.length === 0 ? (
                        <p>Your Wishlist is empty.</p>
                    ) : (
                  
                        products.map((product) => (
                            <div key={product.id} className="cartCard">
                                <img src={product.image} alt={product.title} />
                                <h5>{product.title}</h5>
                                <h5>Quantity: {product.quantity}</h5>
                                <h5>${(product.price * product.quantity).toFixed(2)}</h5>
                                <button
                                    className="btn"
                                    onClick={() => handleRemove(product.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                </div>
                {/* <div className="totalPrice">Total: ${totalPrice.toFixed(2)}</div> */}
            </div>
            {/* <div className="cartSideBar">
                <div className="couponSection">
                    <h4>Coupons</h4>
                    <input type="text" placeholder="Enter coupon code" />
                    <button className="btn">Apply</button>
                </div>
                <img className="couponImage" src={Couban} alt="Coupon" /> */}
                {/* <div className="deliveryDetails">
                    <h4>Delivery Details</h4>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Pin Code"
                        value={pinCode}
                        onChange={(e) => setPinCode(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div> */}
                {/* <Link to="/payment">
                    <button className="btn placeOrderBtn">Proceed</button>
                </Link> */}
            {/* </div> */}
        </div>
    );
};

export default Wishlist;
