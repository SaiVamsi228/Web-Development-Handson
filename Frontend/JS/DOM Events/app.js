let btn = document.querySelectorAll
("button");

console.dir(btn);

for (bt of btn) {
  bt.addEventListener("dblclick", () => alert("Mouse entered!"));
}
