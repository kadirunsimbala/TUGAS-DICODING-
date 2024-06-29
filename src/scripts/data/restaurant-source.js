import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async HomeResto() {
    const response = await fetch(API_ENDPOINT.LIST_RESTO);
    const responseJson = await response.json();

    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTO(id));
    const responseJson = await response.json();

    return responseJson.restaurant;
  }
}

export default RestaurantSource;
