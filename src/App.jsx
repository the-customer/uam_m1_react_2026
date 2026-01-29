
import { useState } from 'react';
import CardArticle from './components/CardArticle';
import CardList from './components/CardList';
import { products as prods } from './data/products';


export default function App() {

  const [products, setProducts] = useState(prods);
  const [favorites, setFavorites] = useState([]);

  const changeFavorite = (id) => {
    if(favorites.includes(id)){ //Le produit est deja dans les fav : retirer le produit dans les fav
      const othersId = favorites.filter(idProd => idProd !== id)
      setFavorites([ ...othersId])
    }else{ //ajouter le produit dans les fav
      setFavorites([ ...favorites,id])
    }
  }

  // const handlePurchase = (idProd) => {
  //   // diminuer le stock du produit
  //   const result = products.map(p => {
  //     if (p.id === idProd) {
  //       return { ...p, stock: p.stock - 1 };
  //     }
  //     return p;
  //   });
  //   setProducts([...result]);
  // }

  const handlePurchase = (idProd,qty=1) => {
    // diminuer le stock du produit
    setProducts((prevProducts) => {
      return prevProducts.map(p => {
        if (p.id === idProd) {
          return { ...p, stock: p.stock - qty };
        }
        return p;
      })
    })
  }

  return (
    <CardList>
      {
        products.map(p => (
          <CardArticle 
            key={p.id} 
            product={p} 
            onPurchase={handlePurchase}
            onFavorite = {changeFavorite}
            favorite={favorites.includes(p.id)} />
        ))
      }
    </CardList>


  )
}