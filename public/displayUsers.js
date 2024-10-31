document.addEventListener("scroll", function () {
    const header = document.getElementById("heading");
    const floatingHeader = document.querySelector(".floating-header");
    const headerTop = header.getBoundingClientRect().top;
    if (headerTop < 0) {
      floatingHeader.style.display = "block";
    } else {
      floatingHeader.style.display = "none";
    }
  });
  