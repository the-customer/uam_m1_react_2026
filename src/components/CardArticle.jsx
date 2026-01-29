import { useState } from "react";
import Image from "./Image";

export default function CardArticle({product,onPurchase,onFavorite,favorite}) {
    const [showSpec,setShowSpec] = useState(false);

    return (
        <article className='Container' style={{ backgroundColor: 'slategray' }}>
            <button
                onClick={()=>{onFavorite(product.id)}}
                className='Favorite'>
                { favorite === false ? '🤍' : '❤️'}
            </button>
            <h2>{product.title}</h2>
            <Image img={product.img}/>
            <p>
                Specification:{ showSpec && product.specifications }
                <button onClick={()=>{setShowSpec(!showSpec)}}>
                    show
                </button>
            </p>
            <p>${ product.price }</p>
            { product.stock == 0 
            ? 
            <p className='NotAvailableStatus'>Not available</p> 
            :
            <p>{ product.stock } pcs</p> }
            
            {product.stock > 0 &&<button onClick={()=>{onPurchase(product.id)}}>Buy</button>}
            { product.stock > 1 && <button onClick={()=>{onPurchase(product.id,2)}}>Buy 2</button> }
        </article>
    )
}

// CardArticle({title}) => <CardArticle title="Iphone"/>

function sayHi(name){
    console.log("Hi! "+name)
}

sayHi("toto")