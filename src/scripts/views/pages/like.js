import FavoriteRestoIdb from '../../data/favorite-restoran-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Your Liked this Restoran</h2>
      <div id="restoran" class="restoran">
      </div>
    </div>
  `;
  },

  async afterRender() {
    const Home = await FavoriteRestoIdb.getAllResto();
    const restoranContainer = document.querySelector('#restoran');
    Home.forEach((restoran) => {
      restoranContainer.innerHTML += createRestoItemTemplate(restoran);
    });
  },
};

export default Like;
