import { defineStore } from 'pinia';
import axios from 'axios';
const backendURL = import.meta.env.VITE_BACKEND_URL;

export const useDataStore = defineStore('data', {
  state: () => ({
    categories: [],
    categories_total: null,
    services: [],
    services_total: null,
    items: [],
    errorMessage: "",
  }),
  actions: {
    async get_categories(page = 0, perpage = 5) {
      this.errorMessage = "";
      try {
        const response = await axios.get(backendURL + '/categories', {
          params: {
            page: page,
            perpage: perpage
          }
        });
        this.categories = response.data;
      } catch (error) {
        if (error.response) {
          this.errorMessage = error.response.data.message;
          console.log(error);
        } else if (error.request) {
          this.errorMessage = error.message;
          console.log(error);
        } else {
          console.error(error);
        }
      }
    },
    async get_categories_total() {
      this.errorMessage = "";
      try {
        const response = await axios.get(backendURL + '/categories_total');
        this.categories_total = response.data;
      } catch (error) {
        if (error.response) {
          this.errorMessage = error.response.data.message;
          console.log(error);
        } else if (error.request) {
          this.errorMessage = error.message;
          console.log(error);
        } else {
          console.error(error);
        }
      }
    },
    async get_services(page = 0, perpage = 5) {
      this.errorMessage = "";
      try {
        const response = await axios.get(backendURL + '/services', {
          params: {
            page: page,
            perpage: perpage
          }
        });
        this.services = response.data;
      } catch (error) {
        if (error.response) {
          this.errorMessage = error.response.data.message;
          console.log(error);
        } else if (error.request) {
          this.errorMessage = error.message;
          console.log(error);
        } else {
          console.error(error);
        }
      }
    },
    async get_services_total() {
      this.errorMessage = "";
      try {
        const response = await axios.get(backendURL + '/services_total');
        this.services_total = response.data;
      } catch (error) {
        if (error.response) {
          this.errorMessage = error.response.data.message;
          console.log(error);
        } else if (error.request) {
          this.errorMessage = error.message;
          console.log(error);
        } else {
          console.error(error);
        }
      }
    },
  },
});
