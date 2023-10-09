import { useState } from "react";
import allContext from "./allContext";

export default function AllState(props) {
    const host ="http://localhost:5000";
    const productsInitial = []
      const [products, setProducts]= useState(productsInitial);
      const [pizzas, setPizzas]= useState(productsInitial);
      const [admin, setAdmin] = useState([]);
      const [success,setSuccess] = useState(false);

      // get all products
      const getProducts = async () =>{
        // API call
        const response = await fetch(`${host}/api/admindash/fetch`,{
          method: 'GET',
          headers: {
            'Content-Type' : 'application/json',
            'auth-token': localStorage.getItem('admintoken')
          },
        }); 
        const json = await  response.json() ;
        setProducts(json);
      }


      // add a product
      const addProduct = async (category,name,number,image,price) =>{

        // API call
        const response = await fetch(`${host}/api/admindash/addproduct`,{
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
            'auth-token': localStorage.getItem('admintoken')
          },
          body: JSON.stringify({category,name,number,image,price})
        }); 
        const json = await response.json();
        setSuccess(json.success);
        if(json.success){
          setProducts(products.concat (json.savedProduct));
        }
        else{
          setProducts(products);
        }
      }

      // Delete a product
      const deleteProduct = async(id) =>{

        // API call
        const response = await fetch(`${host}/api/admindash/deleteproduct/${id}`,{
          method: 'DELETE',
          headers: {
            'Content-Type' : 'application/json',
            'auth-token': localStorage.getItem('admintoken')
          }
        });
        const json = await response.json();
         
        console.log(json);
        // console.log("hii"); 
        const newProducts = products.filter((product)=>{ return product._id!==id});
        setProducts(newProducts);
      }

      
      // Edit a product
      const updateProduct = async(id,number,image,price) =>{
        // API call
        const response = await fetch(`${host}/api/admindash/updateproduct/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type' : 'application/json',
          'auth-token': localStorage.getItem('admintoken')
        },
        body: JSON.stringify({number,image,price})
      });
      const json = await response.json();
      console.log(json);

      let newProducts = JSON.parse(JSON.stringify(products));
      // logic to edit in client
      for (let index=0; index < newProducts.length; index++){
        const element = newProducts[index];
        if (element._id === id){
            newProducts[index].number =number ;
            newProducts[index].image = image;
            newProducts[index].price = price;
          break;
        }
      }
      setProducts(newProducts);
      }

      // get admin details
      const getAdmin = async () =>{
        // API call
        const response = await fetch(`${host}/api/authadmin/getadmin`,{
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
            'auth-token': localStorage.getItem('admintoken')
          },
        }); 
        const json = await  response.json() ;
        setAdmin(json);
      }


       // get all pizza
       const getPizza = async () =>{
        // API call
        const response = await fetch(`${host}/api/admindash/fetchpizza`,{
          method: 'GET',
          headers: {
            'Content-Type' : 'application/json',
            'auth-token': localStorage.getItem('admintoken')
          },
        }); 
        const json = await  response.json() ;
        setPizzas(json);
      }


      // add a pizza
      const addPizza = async (name,image,price) =>{

        // API call
        const response = await fetch(`${host}/api/admindash/addpizza`,{
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
            'auth-token': localStorage.getItem('admintoken')
          },
          body: JSON.stringify({name,image,price})
        }); 
        const json = await response.json();
        setSuccess(json.success);
        if(json.success){
          setPizzas(pizzas.concat (json.savedPizza));
        }
        else{
          setPizzas(pizzas);
        }
      }

      // Delete a pizza
      const deletePizza = async(id) =>{

        // API call
        const response = await fetch(`${host}/api/admindash/deletepizza/${id}`,{
          method: 'DELETE',
          headers: {
            'Content-Type' : 'application/json',
            'auth-token': localStorage.getItem('admintoken')
          }
        });
        const json = await response.json();
         
        console.log(json);
        // console.log("hii"); 
        const newPizzas = pizzas.filter((pizza)=>{ return pizza._id!==id});
        setPizzas(newPizzas);
      }

  return (
    <div>
      <allContext.Provider  value={{products, addProduct, deleteProduct, updateProduct, getProducts,admin,getAdmin,success,pizzas,addPizza,getPizza,deletePizza}}>
            {props.children}
        </allContext.Provider>
    </div>
  )
}


