import Image from "./Image";

export default function CardArticle({title}) {

    return (
        <article className='Container' style={{ backgroundColor: 'slategray' }}>
            <button
                className='Favorite'>
                🤍
            </button>
            <h2>{title}</h2>
            <Image/>
            <p>
                Specification:{" "}
                <button>
                    show
                </button>
            </p>

            <p className='NotAvailableStatus'>Not available</p>
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