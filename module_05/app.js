function GetRequest() {
  let url = "https://crud.teamrabbil.com/api/v1/ReadProduct";
  let config = {
    method: "GET",
  };

  fetch(url, config)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((err) => console.log("Error", err));
}

function PostRequest() {
  let url = "https://crud.teamrabbil.com/api/v1/ReadProduct";
//   let url = "https://crud.teamrabbil.com/api/v1/CreateProduct";
  // Not working the URL
  let bodyData = {
    Img: "Photo",
    ProductCode: "2332",
    ProductName: "Cream",
    Quantiy: "20",
    TotalPrice: "299",
    UnitPrice: "500",
  };

  let config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  };

  fetch(url, config)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch((err) => console.log("Error", err))
}
