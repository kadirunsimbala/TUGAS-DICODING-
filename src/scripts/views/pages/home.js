import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
        <h2 class="content__heading">List of Restaurant</h2>
        <div id="restoran" class="restoran">
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await RestaurantSource.HomeResto();
      const restoranContainer = document.querySelector('#restoran');
      restaurants.forEach((restoran) => {
        restoranContainer.innerHTML += createRestoItemTemplate(restoran);
      });
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
    }
  },
};

export default Home;
