let input = document.querySelector("input");

let btn = document.querySelector("button");

let ul = document.querySelector(".myList");

addEleAsList = (inp) => {
  if (inp == "") {
    return;
  }
  let li = document.createElement("li");

  let delBtn = document.createElement("button");

  delBtn.classList.add("deleteBtn");

  delBtn.innerText = "Delete";

  li.innerText = inp;

  li.append(delBtn);

  delBtn.addEventListener("click", ()=>{
    // let parent = delBtn.parent;
    li.remove()
  });

  ul.append(li);

  input.value = "";
};
btn.addEventListener("click", () => {
  addEleAsList(input.value);

  console.log("Task Added");
});

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    addEleAsList(input.value);

    console.log("Task Added");
  }
});
