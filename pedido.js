const inputNumberElement = document.getElementById("card-number-form");
const spanNumberElement = document.querySelector(".total-length-number");
const paragraphCardNumberElement = document.querySelector(".card-number p");

inputNumberElement.addEventListener("input", () => {
  let paragraphCardNumberContent = "XXXX-XXXX-XXXX-XXXX";
  paragraphCardNumberContent =
    inputNumberElement.value +
    paragraphCardNumberContent.slice(inputNumberElement.value.length);
  console.log(paragraphCardNumberContent);
});
