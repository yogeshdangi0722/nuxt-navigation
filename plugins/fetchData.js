

export default defineNuxtPlugin(
    (nuxtApp)=>{

      let controller = null;
      const router = useRouter();

        nuxtApp.fetchData = async (url,options = {})  => {
          try {
                      controller = new AbortController();
                      options.signal = controller.signal;
                      const response = await fetch(url,options);
                      const data = await response.json();
                      return data;
                    } catch (error) {
                      console.error('Error fetching data:', error);
                      throw error;
                    }
                };

        nuxtApp.cancelFetch = function () {
          if (controller) {
            console.log("test");
            controller.abort();               
            controller = null;
          }
        };

        router.beforeEach (() => {
          // console.log(nuxtApp);
          nuxtApp.cancelFetch();
        });
    }
)