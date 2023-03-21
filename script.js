let result = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("calc-btn"));
let tmp = "";
//kek

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    let button_content = e.target.innerText;
    if (
      (result.innerText == "Result" || result.innerText == "Wrong input!") &&
      button_content != "C"
    ) {
      tmp = "";
    }
    switch (button_content) {
      case "C":
        tmp = "Result";
        break;
      case "=":
        try {
          tmp = eval(tmp);
        } catch {
          tmp = "Wrong input!";
        }
        break;
      case "x":
        tmp += "*";
        break;
      default:
        tmp += button_content;
    }
    if (typeof tmp === "number") {
      let num_of_dig = tmp.toString().includes(".")
        ? tmp.toString().split(".").pop().length
        : 0;
      if (num_of_dig > 13) {
        tmp = tmp.toString();
        let e_ind = tmp.search("e");
        let dot_ind = tmp.search(".");
        if (e_ind != -1 && dot_ind != -1)
          tmp = tmp.slice(0, dot_ind + 5) + tmp.slice(e_ind);
        else if (e_ind != -1 && dot_ind == -1) tmp = tmp.slice(0, dot_ind + 10);
        else if (e_ind == -1 && dot_ind == -1) tmp = tmp.slice(0, dot_ind + 10);
      }
      result.innerText = tmp;
    } else if (tmp.length > 16) result.innerText = "..." + tmp.slice(-13);
    else result.innerText = tmp;
  });
});
