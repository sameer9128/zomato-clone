import { useContext } from "react"
import './OrderPlace.css';
import { StoreContext } from "../../context/StoreContext"

export default function OrderPlace(){
    const {getTotalCartAmount}=useContext(StoreContext)
    return(
       <form className="place-order">
        <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
            <input type="text" placeholder="First name"/>
            <input type="text" placeholder="Last Name"/>
        </div>
        <input type="email" placeholder="Email addres"/>
        <input type="text" placeholder="Street"/>
        <div className="multi-fields">
            <input type="text" placeholder="City"/>
            <input type="text" placeholder="State"/>
        </div>
        <div className="multi-fields">
            <input type="text" placeholder="Zip Code"/>
            <input type="text" placeholder="Country"/>
        </div>
        <input type="text" placeholder="phone"/>

        </div>
        <div className="place-order-right">
        <div className="cart-total">
                    <h2>cart total</h2>
                    <div>
                    <div className="cart-total-details">
                            <p>subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery</p>
                            <p>${getTotalCartAmount()===0?0:2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCartAmount===0?0:getTotalCartAmount()+2}</b>
                        </div>
                        
                    </div>
                    <button>PROCEED TO PAYMENT</button>
                </div>

        </div>
       </form>
    )
}