import socketIOClient from "socket.io-client";

class SocketStore {
  constructor() {
    // this.socket = socketIOClient("http://127.0.0.1:3000");
    this.socket = socketIOClient("https://savemyspot-node.codeunicorn.io");
  }

  getRestaurant(restaurant, user) {
    this.socket.emit("restaurant room", {
      user: user,
      restaurant: restaurant
    });
  }

  addToQ(user, restaurant, numOfGuests) {
    this.socket.emit("join q", {
      user: user,
      restaurant: restaurant,
      guests: numOfGuests
    });
  }

  leaveQ(queueID) {
    this.socket.emit("leave q", queueID);
  }

  back(restaurantID) {
    this.socket.emit("back", restaurantID);
  }
}

export default new SocketStore();
