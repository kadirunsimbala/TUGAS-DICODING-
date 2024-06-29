import LikeButtonInitiator from "../src/scripts/utils/like-button-initiator";
import FavoriteRestoIdb from "../src/scripts/data/favorite-restoran-idb";

describe("Liking A Restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("should show the like button when the restaurant has not been liked before", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: 1,
      },
    });
    expect(
      document.querySelector('[aria-label="like this Resto"]')
    ).toBeTruthy();
  });

  it("should not show the unlike button when the restaurant has not been liked before", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: 1,
      },
    });
    expect(
      document.querySelector('[aria-label="unlike this Resto"]')
    ).toBeFalsy();
  });
  it("should be able to like the restaurant", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: 1,
      },
    });
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const restaurant = await FavoriteRestoIdb.getResto(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestoIdb.deleteResto(1);
  });
  it("should not add a restaurant again when its already liked", async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: 1,
      },
    });
    await FavoriteRestoIdb.putResto({ id: 1 });
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    await expect(FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);
    await FavoriteRestoIdb.deleteResto(1);
  });
});
