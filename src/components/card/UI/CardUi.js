import React from 'react'
import Styles from '../assets/css/CardUi.module.css'
export default function CardUi(props) {
    const {product,index,addItem,checkItem} = props;
    return (
        <div className="col-md-4 col-lg-4" key={index}>
        <div className={`card  p-2 shadow ${Styles.cardStyle}`}>
          <img src={product.image} className={`card-img-top image-fluid ${Styles.sizeofimage}`} alt="..." />
          <div className="card-body">
            <div className={Styles.cardBodyStyle}>
           <div className="titlestyle"> <h5 className="card-title">{product.title}</h5> 
            <p className="card-text"> <b>Price:</b> &nbsp;<span className="text-danger">{product.price}$</span></p>
            {checkItem===false?
            <button className="btn btn-primary" onClick={addItem}> Add to Cart</button>:
            <button className="btn btn-primary" onClick={addItem} disabled> item added</button>}
          </div>
          </div>
          </div> 
        </div>
        </div>
    )
}
