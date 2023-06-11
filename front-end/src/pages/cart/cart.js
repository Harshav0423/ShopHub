import { useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector(state=>state.cart.items)
//   return (
//     <Card className={classes.cart}>
//       <h2>Your Shopping Cart</h2>
//       <ul>
//         {cartItems.map(order => (<CartItem key={order.id}
//           item={{ id:order.id, title: order.title, quantity: order.quantity, total: order.totalPrice, price: order.price }}
//         />))}
//       </ul>
//     </Card>
//   );
    return <div>Cart page</div>
}

export default Cart;