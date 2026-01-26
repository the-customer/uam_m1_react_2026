import './App.css';
import CardArticle from './components/CardArticle';

export default function App() {
  return (
    <div className='App'>
        <h2>Products</h2>
        <div className="List">
          <CardArticle title="Apple Watch" nom="codoou"/>
          <CardArticle title="Iphone"/>
          <CardArticle title="Airpods"/>
        </div>
          
    </div>
  )
}