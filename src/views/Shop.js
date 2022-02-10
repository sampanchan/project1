import React, {useContext} from 'react';
import { Context } from '../store/store';




export default function Shop (){
    const [ state, dispatch] = useContext(Context);
    console.log(state.products);

    const addItemToCart = (item) => dispatch({type: 'ADD_ITEM' , payload: item});
    return (
        <div className="wrap">
            <h1>Shop</h1>
            {state.products.map((product, i)=> {
                const key = `product--${i}`;
                return(
                    <div className="item" key={key}>
                        <img src={product.image} alt={product.title}/>
                        <h4>{product.title}</h4>
                        <p>{product.desc}</p>
                        <strong>Price:{product.price} </strong>
                        <button onClick={()=> addItemToCart(product)} >Add to cart</button>
                    </div>

                )
            })};
        </div>
        
    )
}