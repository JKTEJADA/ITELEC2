
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './Navbar';
import SearchBar from './Searchbar';
import Filter from './Filter';
import Product from './Product';

const data =[{
  "photoname": "http://dummyimage.com/194x100.png/cc0000/ffffff",
  "name": "Ali",
  "likes": 40,
  "views": 99
}, {
  "photoname": "http://dummyimage.com/108x100.png/5fa2dd/ffffff",
  "name": "Nevins",
  "likes": 2,
  "views": 87
}, {
  "photoname": "http://dummyimage.com/141x100.png/cc0000/ffffff",
  "name": "Herve",
  "likes": 66,
  "views": 86
}, {
  "photoname": "http://dummyimage.com/236x100.png/dddddd/000000",
  "name": "Tripp",
  "likes": 13,
  "views": 100
}, {
  "photoname": "http://dummyimage.com/129x100.png/5fa2dd/ffffff",
  "name": "Adair",
  "likes": 41,
  "views": 69
}, {
  "photoname": "http://dummyimage.com/130x100.png/5fa2dd/ffffff",
  "name": "Perry",
  "likes": 41,
  "views": 2
}, {
  "photoname": "http://dummyimage.com/159x100.png/cc0000/ffffff",
  "name": "Barri",
  "likes": 69,
  "views": 58
}, {
  "photoname": "http://dummyimage.com/167x100.png/5fa2dd/ffffff",
  "name": "Clark",
  "likes": 10,
  "views": 42
}, {
  "photoname": "http://dummyimage.com/218x100.png/5fa2dd/ffffff",
  "name": "Patton",
  "likes": 8,
  "views": 79
}, {
  "photoname": "http://dummyimage.com/238x100.png/5fa2dd/ffffff",
  "name": "Fredrick",
  "likes": 73,
  "views": 8
}]

const cards = data.map((card) => {
  return(
    <div className='col'>
      <Product photoname={card.photoname} name={card.name} image={card.image} likes={card.likes} views={card.views} />
    </div>
  );
})

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className='my-2 border rounded-pill mx-4'>
        <SearchBar />
        </div>
        
        <div className='my-2'>
        <Filter/>
        </div>
        

        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          {cards}
        </div>
      
        
    </div>
  );
}





export default App;
