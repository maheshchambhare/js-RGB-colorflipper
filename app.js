const color = new Array(256);

const btnAction = document.querySelector(".btn");

btnAction.addEventListener("click", () => {
  document.body.style.backgroundColor =
    "rgb(" + getrandom() + "," + getrandom() + "," + getrandom() + ")";
  console.log(
    "rgb(" + getrandom() + "," + getrandom() + "," + getrandom() + ")"
  );
});

function getrandom() {
  return Math.floor(Math.random() * color.length);
}
