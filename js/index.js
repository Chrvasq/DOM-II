// prevent default on nav links
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
  });
});

// change color of nav link on mouseover and reset on mouseleave
navLinks.forEach(link => {
  link.addEventListener("mouseover", event => {
    link.style.color = "red";
  });
});

navLinks.forEach(link => {
  link.addEventListener("mouseleave", event => {
    link.style.color = "";
  });
});

// rotate top image on mouseover and reset on mouseleave
const topImg = document.querySelector(".intro img");
topImg.addEventListener("mouseover", event => {
  topImg.style.transform = "rotate(20deg)";
});

topImg.addEventListener("mouseleave", event => {
  topImg.style.transform = "";
});

// row-reverse when double clicking the content section image
const contentSectionImg = document.querySelector(
  ".content-section .img-content"
);

contentSectionImg.addEventListener("dblclick", event => {
  const contentSection = document.querySelector(".content-section");
  if (contentSection.style.flexDirection === "row-reverse") {
    contentSection.style.flexDirection = "";
  } else {
    contentSection.style.flexDirection = "row-reverse";
  }
});

// on page load hide intro section paragraph
const introSectionPara = document.querySelector(".intro p");
window.addEventListener("load", event => {
  introSectionPara.style.display = "none";
});

// show hidden paragraph on click of h2
document.querySelector(".intro h2").addEventListener("click", event => {
  introSectionPara.style.display = "";
});

// on scroll wheel change font size of first p element of content-section inverse content text content
const inverseContentSectionPara = document.querySelector(
  ".content-section.inverse-content .text-content p"
);

inverseContentSectionPara.addEventListener("wheel", event => {
  inverseContentSectionPara.style.fontSize = "35px";
});

// on drag display none
const adventureAwaitsImg = document.querySelector(".img-fluid.rounded");
adventureAwaitsImg.addEventListener("drag", event => {
  adventureAwaitsImg.style.display = "none";
});

// on click reset image display
document
  .querySelector(".content-section.inverse-content .img-content")
  .addEventListener("click", event => {
    if (adventureAwaitsImg.style.display === "none") {
      adventureAwaitsImg.style.display = "";
    }
  });

// change background color on click of button. stoppropagation  to avoid bubbling
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
  button.addEventListener("click", event => {
    button.style.backgroundColor = "red";
    event.stopPropagation();
  });
});

// change background color on click of div
const destinationSections = document.querySelectorAll(".destination");
destinationSections.forEach(destination => {
  destination.addEventListener("click", event => {
    destination.style.backgroundColor = "blue";
  });
});

// change background back to white on double click of div
destinationSections.forEach(destination => {
  destination.addEventListener("dblclick", event => {
    destination.style.backgroundColor = "";
  });
});
