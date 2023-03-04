let nav = document.querySelector(".top");
let leftabout = document.querySelector(".left-about ");
let rightabout = document.querySelector(".right-about ");
let projects = document.querySelectorAll(".transition");
let more = document.querySelector(".more");
let fade = document.querySelectorAll(".fadein");
let inputs = document.querySelectorAll("input");
let form = document.querySelector("form");
let names = document.querySelector("#name");
let email = document.querySelector("#email");

let message = document.querySelector("#text");

let loginfunction = function () {
  nav.classList.add("load-nav");
  leftabout.classList.add("left-trans");
  rightabout.classList.add("right-trans");
};
loginfunction();

let options = { root: null, threshold: 0 };
let callback = (entries) => {
  let [entrie] = entries;
  if (!entrie.isIntersecting) return;
  entrie.target.classList.add("showproject");
};

let observer = new IntersectionObserver(callback, options);
projects.forEach((project) => {
  observer.observe(project);
});
let callbacks = (entries) => {
  let [entrie] = entries;
  if (!entrie.isIntersecting) return;
  entrie.target.classList.add("moreshow");
};
let optionss = { root: null, threshold: 1 };
let moreobserver = new IntersectionObserver(callbacks, optionss);

moreobserver.observe(more);
// sticky navvvv

let call = (entries) => {
  let [entrie] = entries;
  if (!entrie.isIntersecting) {
    nav.classList.add("sticky");
    console.log("no");
  } else nav.classList.remove("sticky");
};
let opt = { root: null, threshold: 0.5 };
let navobserver = new IntersectionObserver(call, opt);

navobserver.observe(document.querySelector(".about"));

function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("text").value,
  };
  const serviceID = "service_9j53q2w";
  const templateID = "template_ryza5ge";
  emailjs
    .send("service_9j53q2w", "template_ryza5ge", params, "svBMGOC8-8Bf_5XGC")
    .then((res) => {
      if (
        names.value.length > 0 &&
        email.value.length > 0 &&
        message.value.length > 0
      ) {
        document.querySelector(".messae").style.display = "flex";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("text").value = "";
      }
      // document.getElementById("name").value = "";
      // document.getElementById("email").value = "";
      // document.getElementById("text").value = "";
      // document.getElementById("number").value = "";
      // console.log(res);
      // alert("message send");
    })
    .catch((err) => console.log());
}

// fade in --------------------------
let fadecall = (entries) => {
  let [entrie] = entries;
  if (!entrie.isIntersecting) return;
  else {
    entrie.target.classList.add("moreshow");
    console.log("a");
  }
};
let fadeoptions = { root: null, threshold: 0.1 };
let fadeobserver = new IntersectionObserver(fadecall, fadeoptions);

fade.forEach((fades) => {
  fadeobserver.observe(fades);
});

// form work

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    if (document.querySelector("#name").textContent.length > 0) {
      console.log("right name");
    }
  });
  if (
    names.value.length > 0 &&
    email.value.length > 0 &&
    message.value.length > 0
  ) {
    console.log("nice");
    // document.querySelector(".messae").style.display = "flex";
  } else console.log("no");
});

// navbar---------------------------------
const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".right-nav");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
  document.querySelector(".ab").classList.toggle("active");
  document.querySelector(".p").classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
    document.querySelector(".ab").classList.remove("active");
    document.querySelector(".p").classList.remove("active");
  })
);
//  loader section

window.addEventListener("load", () => {
  document.querySelector(".preloader").style.display = "none";
  document.body.style.overflow = "unset";
});
