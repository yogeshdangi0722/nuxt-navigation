<template>

    <button @click="fetchImages">get images</button>
    <div>
      <div v-for="image in images" :key="image.id">
        <img :src="image.urls.regular" :alt="image.alt_description">
      </div>
    </div>
  </template>
  
  <script>
  export default {  
    data() {
      return {
        images: [],
        fetchController: new AbortController()
      };
    },
   
    methods: {
      fetchImages() {
        const accessKey = 'e_6QLjJkeICKK3sVqD_VVOOGsSWm_v8TFoK3VgA_5o8';
        const apiUrl = `https://api.unsplash.com/photos/random?count=100&client_id=${accessKey}`;
        const { fetchData } = useNuxtApp();
        // console.log(this.$route.fullPath);
         
          
          fetchData(apiUrl).then(response=>{this.images=response})
          console.log("first time called",this.images);

          fetchData(apiUrl).then(response=>{this.images=response})
          console.log("second time called",this.images);

          fetchData(apiUrl).then(response=>{this.images=response})
          console.log("third time called",this.images);

        }
    },
   
         
  };
  </script>
  