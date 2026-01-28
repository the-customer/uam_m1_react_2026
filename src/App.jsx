
import CardArticle from './components/CardArticle';
import CardList from './components/CardList';
import { products } from './data/products';

export default function App() {

  return (
    <CardList>
        {
          products.map(p => (
            <CardArticle key={p.id} product={p} />
          ))
        }
    </CardList>
        

  )
}