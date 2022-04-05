(function () {
  const primeForm = document.getElementById("primeForm");
  const myUl = document.getElementById("attempts");
  const myNum = document.getElementById("number");
  const errorContainer = document.getElementById("error");

  if (primeForm) {
    primeForm.addEventListener("submit", (event) => {
      errorContainer.hidden = true;
      number = myNum.value;
      event.preventDefault();
      if (number.trim()) {
        if (number <= 1) {
          errorContainer.hidden = false;
          errorContainer.innerHTML = "Number entered is not valid";
          throw "Error: number entered is not valid.";
        } else {
          let li = document.createElement("li");
          li.innerHTML = `${number} is a prime number`;
          myUl.appendChild(li);
          li.className = "is-prime";
          for (let i = 2; i < number; i++) {
            if (number % i == 0) {
              li.innerHTML = `${number} is NOT a prime number`;
              myUl.appendChild(li);
              li.className = "not-prime";
              break;
            }
          }
        }
      } else {
        errorContainer.hidden = false;
        errorContainer.innerHTML = "Please enter a number";
        throw "Error: input entered is invalid or empty";
      }
    });
  }
})();
