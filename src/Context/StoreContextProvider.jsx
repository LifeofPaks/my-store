import React, { useState } from "react";
import { createContext } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const contextValue = {
    selectedImage,
    setSelectedImage,
    quantity,
    setQuantity,
    openCart,
    setOpenCart,
    isEmpty,
    setIsEmpty,
    exitEmptyCart,
    setExitEmptyCart,
    showMenu,
    setShowMenu,
    increase,
    decrease,
    toggleCart,
    addToCart,
    cartStatus,
    homePage,
    toggleMenu,
    scrollToTop,
    handleClick,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
