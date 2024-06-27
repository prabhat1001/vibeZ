import React,{ createContext, useState, useEffect} from 'react'

// create context 
export const CartContext = createContext();

const CartProvider = ({children}) => {
  // cart state
  const [cart, setCart] = useState([]);

  //item amount state
  const [itemAmount, setItemAmount] = useState(0);


  //total price state
  const [total, setTotal] = useState(0);

  //update total price
  useEffect(()=>{
      const total = cart.reduce((acc, curr)=>{
        return acc + curr.price * curr.amount;
      },0);

      setTotal(total);
    },[cart]);

  //update item amount
  useEffect(()=>{
    if(cart){
      const amount = cart.reduce((acc, curr)=>{
        return acc + curr.amount;
      },0);

      setItemAmount(amount);
    }
    
  }, [cart]);

  //add to cart
  const addToCart = (product, id) =>{
    const newItem = {...product, amount:1};

    //check if the Item is alreaady in cart or not
    const cartItem = cart.find((item) => item.id === id);
    
    //if cart item is already in the cart
    if(cartItem){
      const newCart = [...cart].map((item)=>{
        if(item.id===id){
          return {...item, amount: cartItem.amount + 1};
        }
        else{
          return item;
        }
      });
      setCart(newCart);
    }
    else{
      setCart([...cart, newItem]);
    }
  };

  //remove from cart
  const removeFromCart = (id) =>{
    const newCart = cart.filter((item)=>{
      return item.id !== id;
    });
    setCart(newCart);
  }

  // clear cart
  const clearCart =()=>{
    setCart([]);
  }

  //increase amount
  const increaseAmount = (id) =>{
    const cartItem = cart.find((item)=> item.id === id);
    addToCart(cartItem,id);
  }

    //decrease amount
    const decreaseAmount = (id) =>{
      const cartItem = cart.find((item)=> item.id === id);
      if(cartItem){
        const newCart = cart.map(item=>{
          if(item.id===id){
            return {...item, amount: cartItem.amount - 1}
          }else{
            return item;
          }
        });
        setCart(newCart);
      }
      
      if(cartItem.amount<2){
        removeFromCart(id);
      }
    }

    // console.log('cart:',cart);
  return (
    <CartContext.Provider 
      value={{
        cart,
        addToCart, 
        removeFromCart, 
        clearCart, 
        increaseAmount, 
        decreaseAmount,
        itemAmount,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;