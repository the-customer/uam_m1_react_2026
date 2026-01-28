import { useState } from "react";
import Image from "./Image";

export default function CardArticle({product}) {
    const [showSpec,setShowSpec] = useState(false);

    function clicked(){
        setShowSpec(!showSpec);
    }
    return (
        <article className='Container' style={{ backgroundColor: 'slategray' }}>
            <button
                className='Favorite'>
                🤍
            </button>
            <h2>{product.title}</h2>
            <Image img={product.img}/>
            <p>
                Specification:{ showSpec && product.specifications }
                <button onClick={clicked}>
                    show
                </button>
            </p>
            <p>${ product.price }</p>
            { product.stock == 0 && <p className='NotAvailableStatus'>Not available</p> }
            { product.stock >=1 && <p>{ product.stock } pcs</p> }
            
            <button>Buy</button>
            <button>Buy 2</button>
        </article>
    )
}

// CardArticle({title}) => <CardArticle title="Iphone"/>

function sayHi(name){
    console.log("Hi! "+name)
}

sayHi("toto")