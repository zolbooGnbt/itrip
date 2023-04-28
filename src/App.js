import './App.css';
import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Cart2, Plus, } from "react-bootstrap-icons"
import logo from "./image/logo.png"
import Login from './Login/login';
import Home from './Home/home'
import AddTravel from './ADD/traveling'
import AddFlight from './ADD/flight'
import AllList from './component/flight/allList'
import axios from "axios"
import Banner from './Home/banner';
import AllTravel from './component/travel/allTravel';
import ProductDetail from './component/Detail/productDetail';
import Cart from './component/cart/cart';



function App({ products }) {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [dataDest, setDataDest] = useState([]);
  const [cart, setCart] = useState(JSON.parse(
    localStorage.getItem(
      "products"
    )
  ) || []);

  useEffect(() => {
    axios.get('https://react-45bf8-default-rtdb.asia-southeast1.firebasedatabase.app/destination.json').then(response => {
      var x = Object.values(response.data)
      setDataDest(x)
      JSON.parse(localStorage.getItem('flights'))
    }).catch(error => (alert("Error")));;
  }, [])
  useEffect(() => {
    axios.get('https://react-45bf8-default-rtdb.asia-southeast1.firebasedatabase.app/flight.json').then(response => {
      var x = Object.values(response.data)
      setData(x)
      JSON.parse(localStorage.getItem('flights'))
    }).catch(error => (alert("Error")));;
  }, [])


  useEffect(() => {
    axios.get("https://react-45bf8-default-rtdb.asia-southeast1.firebasedatabase.app/user.json").then(response => {
      var x = Object.values(response.data)
      setUserData(x)
    })
  }, [])

  const handleLogOut = () => {
    localStorage.clear();
    document.location.pathname = "../home.js"
  };

  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify(cart)
    );
  }, [cart]);

  const addHandler = (products) => {
    const newProduct = {
      ...products,
      count: 1,
    };
    setCart([
      ...cart,
      newProduct,
    ]);
  };

  return (
    <BrowserRouter>
      <div className="navbar">
        <a href="/"><img className="logo" src={logo} alt="logo" /></a>
        <div className="navbar1">
          <div className="nav-name">
            <a href="/flight" className="nav-name"  >НИСЛЭГ</a>
            <a href="/travel" className="nav-name"  >АЯЛАЛ</a>
            <a href="/hotel" className="nav-name"  >ЗОЧИД БУУДАЛ</a>

          </div>
          <div className="nav-icons">

            {localStorage.getItem('admin') ?
              <div>
                {
                  localStorage.getItem('admin') ?
                    <div className="nav-icons ">
                      <div className="icons">
                        <Plus className="icon"></Plus>
                        <a type="button" href="/addTravel" className="label">Add Travel</a>
                      </div>
                      <div className="icons">
                        <Plus className="icon"></Plus>
                        <a type="button" href="/addFlight" className="label">Add Flight</a>
                      </div>
                      <a type="button" href="/userInfo" className="label">{userData.userName}</a>
                      <a type="button" href="/login" className="label" onClick={handleLogOut}>Logout</a>
                    </div>
                    :
                    <div className="icons">
                      <a type="button" href="/login" >Нэвтрэх</a>
                    </div>
                }</div>
              : <div>{
                localStorage.getItem('currentUser') ?
                  <div className="nav-icons">
                    <div className="icons">
                      <a type="button" href="/basket" className="label"><Cart2 className="icon"></Cart2>Сагс
                        {' '} {cart ? (
                          <button className="badge">{(cart.length)}</button>
                        ) : (
                          ' '
                        )}{' '}
                      </a>
                    </div>
                    <div className="icons">
                    <a type="button" href="/login" className="label" onClick={handleLogOut}>Logout</a>
                    </div>
                  </div>
                  :
                  <div className="icons">
                    <a type="button" href="/login" className="label" >Нэвтрэх</a>
                  </div>
              }</div>
            }
          </div>
        </div>
      </div>
      <Routes>
        <Route index path="/"
          element={<Home data={data} dataDest={dataDest} />}>
        </Route>
        <Route expect path="/"
          element={<Banner />}>
        </Route>
        <Route expect path="/flight"
          element={<AllList data={data} cart={cart} addHandler={addHandler} />}>
        </Route>
        <Route expect path="/travel"
          element={<AllTravel dataDest={dataDest} cart={cart} addHandler={addHandler} />}>
        </Route>
        <Route expect path="/travel/:ProductId"
          element={<ProductDetail dataDest={dataDest} cart={cart} addHandler={addHandler} products={products} />}>
        </Route>
        <Route expect path="/basket"
          element={<Cart cart={cart} products={products} />}>
        </Route>
        <Route expect path="/login"
          element={<Login data={userData} setData={setUserData} />}>
        </Route>
        <Route expect path="/addTravel"
          element={<AddTravel />}>
        </Route>
        <Route expect path="/addFlight"
          element={<AddFlight />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
