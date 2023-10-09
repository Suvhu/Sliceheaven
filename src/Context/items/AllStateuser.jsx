import { useState } from "react";
import allContextuser from "./allContextuser";

export default function AllStateuser(props) {
    const host ="http://localhost:5000";
    const productsInitial = []
      const [products, setProducts]= useState(productsInitial);
    const [user, setUser] = useState([]);
    const [pizzas, setPizzas]= useState(productsInitial);
  const[carts,setCart] = useState([]);
  const [success,setSuccess] = useState(true);
  const[customcarts,setCustomcart] = useState([]);
  const[orders,setOrder] = useState([]);

    // get user details
    const getUser = async () =>{
      // API call
      const response = await fetch(`${host}/api/authuser/getuser`,{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          'auth-token': localStorage.getItem('usertoken')
        },
      }); 
      const json = await  response.json() ;
      setUser(json);
    }

    // get all products
    const getProducts = async () =>{
      // API call
      const response = await fetch(`${host}/api/userdash/fetch`,{
        method: 'GET',
        headers: {
          'Content-Type' : 'application/json',
          'auth-token': localStorage.getItem('usertoken')
        },
      }); 
      const json = await  response.json() ;
      setProducts(json);
    }

    // get all pizzas
    const getPizza = async () =>{
      // API call
      const response = await fetch(`${host}/api/userdash/fetchpizza`,{
        method: 'GET',
        headers: {
          'Content-Type' : 'application/json',
          'auth-token': localStorage.getItem('usertoken')
        },
      }); 
      const json = await  response.json() ;
      setPizzas(json);
    }


    // add to cart
    const addCart = async (name,image,price,userid) =>{

      // API call
      const response = await fetch(`${host}/api/userdash/addcart`,{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          'auth-token': localStorage.getItem('usertoken')
        },
        body: JSON.stringify({name,image,price,userid})
      }); 
      const json = await response.json();
      setSuccess(json.success);
      if(json.success){
        setCart(carts.concat (json.savedProduct));
      }
      else{
        setCart(carts);
      }
    }

    // get Cart
    const getCart = async () =>{
      // API call
      const response = await fetch(`${host}/api/userdash/fetchcart`,{
        method: 'GET',
        headers: {
          'Content-Type' : 'application/json',
          'auth-token': localStorage.getItem('usertoken')
        },
      }); 
      const json = await  response.json() ;
      setCart(json);
    }

    const deleteCart = async(id) =>{

      // API call
      const response = await fetch(`${host}/api/userdash/deletecart/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type' : 'application/json',
          'auth-token': localStorage.getItem('usertoken')
        }
      });
      const json = await response.json();
       
      console.log(json);
      // console.log("hii"); 
      const newCarts = carts.filter((cart)=>{ return cart._id!==id});
      setCart(newCarts);
    }




    // add to cart
    const addCustomcart = async (pizzabase,pizzasauce,pizzacheese,userid) =>{
      
      // API call
      const response = await fetch(`${host}/api/userdash/addcustomcart`,{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          'auth-token': localStorage.getItem('usertoken')
        },
        body: JSON.stringify({
          pizzabase,pizzasauce,pizzacheese,userid
        })
      }); 
      const json = await response.json();
      setSuccess(json.success);
      if(json.success){
        setCustomcart(customcarts.concat (json.savedProduct));
        
      }
      else{
        setCustomcart(customcarts);
        
      }
    }

    // get Custom Cart
    const getCustomcart = async () =>{
      // API call
      const response = await fetch(`${host}/api/userdash/fetchcustomcart`,{
        method: 'GET',
        headers: {
          'Content-Type' : 'application/json',
          'auth-token': localStorage.getItem('usertoken')
        },
      }); 
      const json = await  response.json() ;
      setCustomcart(json);
    }


    const deleteCustomcart = async(id) =>{

      // API call
      const response = await fetch(`${host}/api/userdash/deletecustomcart/${id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type' : 'application/json',
          'auth-token': localStorage.getItem('usertoken')
        }
      });
      const json = await response.json();
       
      console.log(json);
      // console.log("hii"); 
      const newCustomcarts = customcarts.filter((customcart)=>{ return customcart._id!==id});
      setCustomcart(newCustomcarts);
    }





    const addOrder = async (e) =>{

      const {name, price, userid} = e ;
      // API call
      const response = await fetch(`${host}/api/userdash/addorder`,{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          'auth-token': localStorage.getItem('usertoken')
        },
        body: JSON.stringify({ name, price, userid})
      }); 
      const json = await response.json();
      setSuccess(json.success);
      if(json.success){
        setOrder(orders.concat (json.savedProduct));
      }
      else{
        setOrder(orders);
      }
    }

    const addCustomorder = async (e) =>{

      const {name, price, userid} = e ;
      // API call
      const response = await fetch(`${host}/api/userdash/addcustomorder`,{
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          'auth-token': localStorage.getItem('usertoken')
        },
        body: JSON.stringify({ name, price, userid})
      }); 
      const json = await response.json();
      setSuccess(json.success);
      if(json.success){
        setOrder(orders.concat (json.savedProduct));
      }
      else{
        setOrder(orders);
      }
    }
      

  return (
    <div>
      <allContextuser.Provider  value={{getUser,getProducts,getPizza,products,user,pizzas,carts,addCart,success,addCustomcart,getCart,customcarts,getCustomcart,deleteCart,deleteCustomcart,addOrder,addCustomorder,orders}}>
            {props.children}

        </allContextuser.Provider>
    </div>
  )
}



