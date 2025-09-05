import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null)

export const CartProvider =({children})=>{

    const [cartItem, setCartItem]= useState([])

    const addToCart = (product)=>{
        const itemInCart = cartItem.find((item)=>item.id===product.id)
        if(itemInCart){
            // incerase quantity if already in cart
            const updatedCart = cartItem.map((item)=>
                item.id === product.id?{...item,quantity: item.quantity+1}:item
            )
            setCartItem(updatedCart)
            toast.success("Product quantity increase")
        }else{
            // if item is not in cart
        setCartItem([...cartItem,{...product, quantity:1}])
         toast.success("Product added to Cart")
    }
        
    }

    const updateQuantity=(cartItem,productId, action)=>{
        setCartItem(
            cartItem.map((item)=>{
                if(item.id === productId){
                    let newUnit = item.quantity
                    if(action === "incerase"){
                        newUnit = newUnit + 1
                        toast.success(" Quantity increase")
                    }
                    else if(action === "decrease"){
                        newUnit = newUnit-1
                        toast.success(" Quantity decrease")
                    }
                    return newUnit>0?{...item, quantity: newUnit}:null
                }
                return item
            }).filter((item)=>item!=null)
        )
    }

    const deleteItem =(productId)=>{
        setCartItem(cartItem.filter(item =>item.id !== productId))
        toast.success(" Product deleted ")
    }
    
    return<CartContext.Provider value={{cartItem, setCartItem, addToCart,updateQuantity , deleteItem}}>
        {children}
    </CartContext.Provider>
}

export const useCart = ()=>useContext(CartContext)

