import axiosClient from './axiosClient.js';

const productApi = {
  getAll() {
    const url = "/product";
    return axiosClient.get(url);
  },

  get(id) {
    const url = `/product/:${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = "/product";
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/product/:${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/product/${id}`;
    return axiosClient.delete(url);
  },

  searchByFields(query) {
    return axiosClient
      .get("/product")
      .then((response) => {
        const products = response || []; 
        if (!Array.isArray(products)) {
          throw new Error("Unexpected response format");
        }
        const filteredResults = products.filter((product) =>
          Object.values(product).some((value) =>
            value.toString().toLowerCase().includes(query.toLowerCase())
          )
        );
        return filteredResults;
      })
      .catch((error) => {
        console.error("Error during search:", error);
        throw error;
      });
  },

  searchByCategory(category) {
    const url = "/product";

    if(category === 'all') return this.getAll();

    return axiosClient.get(url, { params: { category } });
  },
};

export default productApi;
