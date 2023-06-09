<template>
    <div>
      <button @click="fetchProducts">Fetch Products</button>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <ul>
          <li v-for="product in products" :key="product.id">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p>Price: ${{ product.price }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [],
        loading: false,
      };
    },
    methods: {
      fetchProducts() {
        this.loading = true;
        const { fetchData } = useNuxtApp();
      
          fetchData("https://fakestoreapi.com/products").then(response=>{this.products=response;this.loading = false;})
          console.log("1st time called",this.products);

          fetchData("https://fakestoreapi.com/products").then(response=>{this.products=response;this.loading = false;})
          console.log("2nd time called",this.products);

          fetchData("https://fakestoreapi.com/products").then(response=>{this.products=response;this.loading = false;})
          console.log("3rd time called",this.products);
       

      }
    },
   
      
  };
  </script>
  