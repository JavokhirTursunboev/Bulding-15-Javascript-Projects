const buttons = document.querySelectorAll(".button");

// set inital
let output = 0;
const count = document.querySelector(".counting");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      output--;
    } else if (styles.contains("increase")) {
      output++;
    } else {
      output = 0;
    }

    // changing color
    output > 0
      ? (count.style.color = "rgb(16,42,66)")
      : (count.style.color = "red");

    //   give value to output
    count.textContent = output;
  });
});
