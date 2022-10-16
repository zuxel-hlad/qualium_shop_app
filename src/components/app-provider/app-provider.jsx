import { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {

  const [products, setProducts] = useState([
    { title: "test", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, eligendi.",quantity: 1, price: 90, id: 1 },
    { title: "test", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, eligendi.",quantity: 1, price: 90, id: 2 },
    { title: "test", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, eligendi.",quantity: 1, price: 90, id: 3 },
    { title: "test", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, eligendi.",quantity: 1, price: 90, id: 4 },
    { title: "test", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, eligendi.",quantity: 1, price: 90, id: 5 },
  ]);
  const [cart, setCart] = useState([
    { title: "test", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, eligendi.",quantity: 1, price: 90, id: 1 },
    { title: "test", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, eligendi.",quantity: 1, price: 90, id: 2 },
    { title: "test", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, eligendi.",quantity: 1, price: 90, id: 3 },
    { title: "test", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, eligendi.",quantity: 1, price: 90, id: 4 },
    { title: "test", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, eligendi.",quantity: 1, price: 90, id: 5 },
  ]);

  const createProducts = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        products,
        createProducts,
        deleteProduct,
        cart
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
