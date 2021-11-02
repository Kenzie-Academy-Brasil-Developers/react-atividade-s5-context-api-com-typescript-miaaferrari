import { createContext, ReactNode, useContext, useState } from "react";

interface CardProviderProps {
    children: ReactNode;
}

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

interface CartProviderData {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CardProviderProps) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productDeleted: Product) => {
    //    const newList = cart.filter((product) => cart.indexOf(product) !== i)
       const newArr: any = []
       for(let i = 0; i < cart.length; i++) {
           if(i !== cart.indexOf(productDeleted)) {
               newArr.push(cart[i])
            } 
        }
        setCart(newArr);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }} >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);