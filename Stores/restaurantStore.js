import axios from "axios";
import { decorate, observable } from "mobx";

const instance = axios.create({
  baseURL: "http:127.0.0.1:8000/"
});

class RestaurantStore {
  constructor() {
    this.restaurants = [];
    this.restaurant = {};
    this.loading = true;
  }

  fetchAllRestaurants() {
    instance
      .get("api/restaurant/list/")
      .then(res => res.data)
      .then(restaurant => {
        this.restaurants = restaurant;
      })
      .catch(err => console.error(err));
  }

  fetchARestaurant(restaurantID) {
    console.log("if", restaurantID);
    instance
      .get(`api/restaurant/detail/${restaurantID}`)
      .then(res => res.data)
      .then(restaurant => {
        this.restaurant = restaurant;
        this.loading = false;
      })
      .catch(err => console.error(err));
  }
}

decorate(RestaurantStore, {
  restaurants: observable,
  restaurant: observable,
  loading: observable
});

export default new RestaurantStore();
