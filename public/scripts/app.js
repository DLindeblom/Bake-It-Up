// Client facing scripts here


function saveFavourite(event) {
  const heartElement = event.target //access to the cake-display = container
  const favIconElement = heartElement.parentNode;
  const cakeDisplayElement = favIconElement.parentNode; //access to the children
  console.log("cakes[cake].id", cakeDisplayElement.id)
  const cakeID = cakeDisplayElement.id
  addFavCake(1, cakeID)
}

