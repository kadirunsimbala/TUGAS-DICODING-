import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="restoran" class="restoran"></div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const Home = await RestaurantSource.detailResto(url.id);
    const restoranContainer = document.querySelector('#restoran');
    restoranContainer.innerHTML = createRestoDetailTemplate(Home);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: Home.id,
        name: Home.name,
        city: Home.city,
        pictureId: Home.pictureId,
        description: Home.description,
        rating: Home.rating,
      },
    });
  },
};

export default Detail;
