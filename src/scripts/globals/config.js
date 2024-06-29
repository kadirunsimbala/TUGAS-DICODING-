const CACHE_VERSION = "v1";
const CACHE_NAME = `${CACHE_VERSION}_restaurants`;

const CONFIG = {
  BASE_URL: "https://restaurant-api.dicoding.dev",
  BASE_IMAGE_URL: "https://restaurant-api.dicoding.dev/images/small/",
  DEFAULT_LANGUAGE: "en-us",
  CACHE_NAME: CACHE_NAME,
  DATABASE_NAME: "restaurant-db",
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: "restaurant",
};

export default CONFIG;
