import React,{  useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export const Card = ({ e, id }) => {
 
    const [
        quantity,
        setQuantity,
         ]  = useState(1);
    const [cartItems, setCartItems] = useState([{ id: e.id, quantity: 1, price: e.price }]);     

    const removeItemFromCart = (productId) => {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.id === productId ? { ...item, quantity: 0, price: 0 } : item
          )
        );
        setQuantity(0);
      }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        setCartItems((prevItems) =>
            prevItems.map((item) =>
              item.id === e.id ? { ...item, quantity: quantity + 1 } : item
            )
          );
      };
    
      const decreaseQuantity = () => {
        if (quantity > 0) {
          setQuantity(prevQuantity => prevQuantity - 1);
          setCartItems((prevItems) =>
            prevItems.map((item) =>
              item.id === e.id ? { ...item, quantity: quantity - 1 } : item
            )
          );
        }

    }
    const discountPrice = Math.round(
        e.price * (e.discountPercentage / 100)
      ); 

    const TotalAmount = 
    [e.price-discountPrice]*quantity;

    return (
        <div className='container'>
            <div
                key={id}
                className="card mb-5 bg-light text-dark"
                style={{ minWidth: "100%", maxWidth: "300px" }}
            >
                <div className="row g-0">
                    
                    <div className="col-md-3">
                        <img
                            src={e.image}
                            className="img-fluid p-4 cardImage"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body px-3">
                            <div className="top">
                                <div className="top-header d-flex justify-content-between align-items-center">
                                    <h5 className="card-title">{e.title}</h5>
                                    <h4 className="card-title">${e.price}</h4>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="card-text">
                                        <b>Brand : </b>
                                        {e.brand}
                                    </p>
                                    <p className="card-text text-success">
                                        Discount Offer : <b>{e.discountPercentage}%</b>
                                    </p>

                                </div>
                                <p className="card-text">{e.description}</p>
                                <p className="card-text text-success">
                                    In Stock : {e.stock}
                                </p>
                                <p className="card-text">
                                    <b>Rating:</b> {e.rating}
                                </p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-text">
                                    <small className="text text-muted">Sale</small>
                                </p>

                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        style={{ marginRight: "20px" }} 
                                        onClick={()=>
                                            removeItemFromCart(e.id)
                                        }
                                    >
                                        Remove
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                        style={{ marginRight: "8px" }}
                                        onClick={()=>{
                                            decreaseQuantity()
                                        }}
                                    >
                                        {" "}
                                        -{" "}
                                    </button>
                                    <div className="py-1 quantityText">{quantity}</div>
                                    <button
                                        type="button"
                                        className="btn btn-outline-success"
                                        style={{ marginLeft: "8px" }}
                                        onClick={()=>{
                                            increaseQuantity()
                                        }}
                                    >
                                        {" "}
                                        +{" "}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div>
                        <div className="d-flex justify-content-between align-items-center">
                      Original Price (1 item) :{" "}
                      <p className="card-text">${e.price} </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      Discount Amount :{" "}
                      <p className="card-text text-success">
                        {" "}
                        - ${discountPrice}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      Final Price :{" "}
                      <p className="card-text">${e.price-discountPrice}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      Total Amount :{" "}
                      <h5 className="card-text">${TotalAmount}</h5>
                    </div>
                  </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
