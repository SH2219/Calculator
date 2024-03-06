let string = "";
let buttons = document.querySelectorAll(".text");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector(".input input").value = string;
    }else if(e.target.innerHTML == 'AC'){
        string = '';
        document.querySelector(".input input").value = string;
    }else{
        string = string + e.target.innerHTML;
        document.querySelector(".input input").value = string;
    }
  
  });
});
