import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import ShopCategory from './Pages/ShopCategory';
import Navbar from './Components/Navbar/Navbar';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';



function App() {
  return (
    <div className="App">
     
        <BrowserRouter>
          <Navbar />
           <Routes>
            <Route path= "/" element={<Home />}/>
            <Route path= "/men" element={<ShopCategory category= 'men'/>} />
            <Route path='/women' element= {<ShopCategory category= 'women' />} />
            <Route path='/kids' element= {<ShopCategory category= 'kids' />} />
            <Route path='/product' element = {<Product />}>
                <Route path=':productId' element = {<Product />} />
            </Route>
            <Route path='/cart' element = {<Cart />} />
            <Route path='/login' element = {<Login />} />
         </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
