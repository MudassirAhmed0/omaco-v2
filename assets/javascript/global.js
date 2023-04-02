// HAMBURGER JS
AOS.init({ once: true });

function isElementInViewport(el) {
  // Get the bounding rectangle of the element
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const footer = document.querySelector("#footerLogo");
const takeToTop = document.getElementById("takeToTop");

const handleLang = () => {
  console.log(window.location);
  if (window.location.href.includes("/ar/")) {
    window.location.href = window.location.href.replace("/ar/", "/");
  } else {
    window.location.href =
      window.location.origin + "/ar" + window.location.pathname;
  }
};
window.addEventListener("scroll", () => {
  if (isElementInViewport(footer)) {
    takeToTop.classList.add("whiteIt");
  } else {
    takeToTop.classList.remove("whiteIt");
  }
});

const scrollDown = () => {
  window.scrollBy(0, window.innerHeight);
};

var menu = document.querySelector(".menu").children[0];
var spantwo = document.querySelector(".line-2");
var spanone = document.querySelector(".line-1");
var spanthree = document.querySelector(".line-3");

menu.onclick = () => {
  spantwo.classList.toggle("li2ne");
  spanone.classList.toggle("l1ine");
  spanthree.classList.toggle("lin3e");
};

// SIDEBAR

const sidebar = document.getElementById("sidebar");
const body = document.querySelector("body");

function sidebarOpen() {
  sidebar.classList.toggle("opacity");
  body.classList.toggle("active");
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.addEventListener("scroll", (e) => {
  if (window.scrollY > window.innerHeight / 2) {
    takeToTop.classList.remove("opacity-0");
    takeToTop.classList.remove("pointer-events-none");
  } else {
    takeToTop.classList.add("opacity-0");
    takeToTop.classList.add("pointer-events-none");
  }
});
