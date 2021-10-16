import React, { Component, createContext } from "react";
import Client from "shopify-buy";

const ShopContext = createContext();

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
});

export class ShopProvider extends Component {
  state = {
    product: {},
    products: [],
    checkout: {},
    isCartOpen: false,
    isMenuOpen: false,
  };

  componentDidMount() {
    if (!!localStorage.checkout_id) {
      this.fetchCheckout(localStorage.checkout_id);
    } else {
      this.createCheckout();
    }
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout_id", checkout.id);
    this.setState({ checkout });
  };
  fetchCheckout = async (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => this.setState({ checkout }));
  };
  addItemToCheckout = async (variantId, quantity) => {
    const lineItemToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];

    console.log("checkout", this.state.checkout);
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemToAdd
    );

    this.setState({ checkout });

    this.openCart();
  };
  removeLineItem = async (lineItemIdsToRemove) => {
    const checkout = await client.checkout.removeLineItems(
      this.state.checkout.id,
      lineItemIdsToRemove
    );
    this.setState({ checkout });
  };
  fetchAllProducts = async () => {
    // Fetch all products in your shop
    const products = await client.product.fetchAll();
    this.setState({ products });
  };
  fetchProductsWithHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    this.setState({ product });
  };
  closeCart = async () => {
    this.setState({ isCartOpen: false });
  };
  openCart = async () => {
    this.setState({ isCartOpen: true });
  };
  closeMenu = async () => {};
  openMenu = async () => {};

  render() {
    return (
      <>
        <ShopContext.Provider
          value={{
            ...this.state,
            fetchAllProducts: this.fetchAllProducts,
            fetchProductsWithHandle: this.fetchProductsWithHandle,
            addItemToCheckout: this.addItemToCheckout,
            removeLineItem: this.removeLineItem,
            openCart: this.openCart,
            closeCart: this.closeCart,
            openMenu: this.openMenu,
            closeMenu: this.closeMenu,
          }}
        >
          {this.props.children}
        </ShopContext.Provider>
      </>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopContext, ShopConsumer };

export default ShopProvider;
