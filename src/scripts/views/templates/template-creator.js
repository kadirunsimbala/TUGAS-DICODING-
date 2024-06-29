import CONFIG from "../../globals/config";

const createRestoItemTemplate = (restoran) => `
  <div class="resto" id="resto-item">
    <div class="card">
      <div class="card-img">
        <div class="city-label">
          <span class="city-label-text">
            Kota ${restoran.city}
          </span>
        </div>
        <img class="load" src="${
          restoran.pictureId
            ? `${CONFIG.BASE_IMAGE_URL}${restoran.pictureId}`
            : "images/heros/hero-image_2.jpg"
        }" alt="${restoran.name}" crossorigin="anonymous">
      </div>
      <div class="card-body">
        <div class="rating">
        <i class="fa fa-star"></i>
          <span>${restoran.rating}</span>
        </div>
        <h3 class="card-title" id="resto-title">
          <a href="./#/detail/${
            restoran.id
          }" title="Link ke halaman detail makanan">${restoran.name}</a>
        </h3>
        <p class="card-text">${restoran.description}</p>
      </div>
    </div>
  </div>
`;

const createRestoDetailTemplate = (restoran) => `
  <div class="detail">
    <h1 class="title" id="resto-title">
      ${restoran.name}
    </h1>
    <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL}${
  restoran.pictureId
}" alt="${restoran.name}" crossorigin="anonymous"/>
    <div class="info">
      <h2>Information</h2>
      <ul>
        <li>
          <h3>Kota</h3>
          <p>${restoran.city}</p>
        </li>
        <li>
          <h3>Alamat</h3>
          <p>${restoran.address}</p>
        </li>
        <li>
          <h3>Rating</h3>
          <p>${restoran.rating}</p>
        </li>
        <li>
          <h3>Foods Menu</h3>
          <p>${restoran.menus.foods.map((food) => food.name).join(", ")}</p>
        </li>
        <li>
          <h3>Drinks Menu</h3>
          <p>${restoran.menus.drinks.map((drink) => drink.name).join(", ")}</p>
        </li>
      </ul>
    </div>
    <div class="overview">
      <h2>Overview</h2>
      <p>${restoran.description}</p>
    </div>
    
    <!-- Customer Reviews -->
    <div class="customer-reviews">
      <h2>Customer Reviews</h2>
      <ul>
        ${restoran.customerReviews
          .map(
            (review) => `
          <li>
            <h3>${review.name}</h3>
            <p>${review.review}</p>
            <p class="review-date">Review Date: ${review.date}</p>
          </li>
        `
          )
          .join("")}
      </ul>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this Resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnLikedButtonTemplate = () => `
  <button aria-label="unlike this Resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createUnLikedButtonTemplate,
};
