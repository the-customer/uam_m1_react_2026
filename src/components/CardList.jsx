import '../App.css';
export default function CardList({children}) {

    return (
        <div className='App'>
            <h2>The Products</h2>
            <div className="List">
                {children}
            </div>
        </div>
    )
}
