import { useState } from "react";
import allContextuser from "./allContextuser";

export default function AllStateuser(props) {
    const host ="http://localhost:5000";
    const productsInitial = []
      const [products, setProducts]= useState(productsInitial);
    const [user, setUser] = useState([]);
    const [pizzas, setPizzas]= useState(productsInitial);

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
      

  return (
    <div>
      <allContextuser.Provider  value={{getUser,getProducts,getPizza,products,user,pizzas}}>
            {props.children}

        </allContextuser.Provider>
    </div>
  )
}


