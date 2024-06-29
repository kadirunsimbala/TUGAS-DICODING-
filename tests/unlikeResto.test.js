import LikeButtonInitiator from "../src/scripts/utils/like-button-initiator";
import FavoriteRestoIdb from "../src/scripts/data/favorite-restoran-idb";

describe("Unliking A Restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  it("should display unlike widget when the restaurant has been liked", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="unlike this Resto"]')
    ).toBeTruthy();
  });

  it("should not display like widget when the restaurant has been liked", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: 1,
      },
    });

    expect(
      document.querySelector('[aria-label="like this Resto"]')
    ).toBeFalsy();
  });
  it("should be able to remove liked restaurant from the list", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: 1,
      },
    });

    await FavoriteRestoIdb.deleteResto(1);

    document
      .querySelector('[aria-label="unlike this Resto"]')
      .dispatchEvent(new Event("click"));
    await expect(FavoriteRestoIdb.getAllRestoo()).toEqual([]);
  });
});
