// ========================================
// 1. HIDE NAVBAR ON SCROLL
// ========================================
$('.hide-on-scroll ul li').click(function(){
  $(this).addClass("active").siblings().removeClass("active");
});

// ========================================
// 2. STICKY NAVIGATION BAR
// ========================================
let stickyNav = document.querySelector(".sticky-nav");
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    stickyNav.classList.add("sticky");
  }else {
    stickyNav.classList.remove("sticky");
  }
}

// ========================================
// 3. NAVIGATION WITH SEARCH
// ========================================
const nav = document.querySelector(".nav");
const searchIcon = document.querySelector("#searchIcon");
const navOpenBtn = document.querySelector(".navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");

if(searchIcon){
  searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
    if (nav.classList.contains("openSearch")) {
      return searchIcon.classList.replace("uil-search", "uil-times");
    }
    searchIcon.classList.replace("uil-times", "uil-search");
  });
}

if(navOpenBtn){
  navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    if(searchIcon) searchIcon.classList.replace("uil-times", "uil-search");
  });
}

if(navCloseBtn){
  navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
  });
}

// ========================================
// 4. DROPDOWN NAVIGATION
// ========================================
let dropdownMenuOpenBtn = document.querySelector(".dropdown-nav .navbar .bx-menu");
let dropdownMenuCloseBtn = document.querySelector(".dropdown-nav .nav-links .bx-x");
let dropdownNavLinks = document.querySelector(".dropdown-nav .nav-links");

if(dropdownMenuOpenBtn){
  dropdownMenuOpenBtn.onclick = function() {
    if(dropdownNavLinks) dropdownNavLinks.style.left = "0";
  }
}

if(dropdownMenuCloseBtn){
  dropdownMenuCloseBtn.onclick = function() {
    if(dropdownNavLinks) dropdownNavLinks.style.left = "-100%";
  }
}

// ========================================
// 5. INDICATOR NAVIGATION
// ========================================
const indicatorLinkItems = document.querySelectorAll(".indicator-nav .link-item");
indicatorLinkItems.forEach((linkItem, index) => {
  linkItem.addEventListener("click", () => {
    document.querySelector(".indicator-nav .active").classList.remove("active");
    linkItem.classList.add("active");
    const indicator = document.querySelector(".indicator-nav .indicator");
    if(indicator){
      indicator.style.left = `${index * 75 + 20}px`;
    }
  });
});

// ========================================
// 6. CSS TABS
// ========================================
const tabLabels = document.querySelectorAll('.tabs-container nav label');
tabLabels.forEach((label, index) => {
  label.addEventListener('click', () => {
    tabLabels.forEach(l => l.classList.remove('checked'));
    label.classList.add('checked');
  });
});

// ========================================
// 7. FULLSCREEN OVERLAY
// ========================================
// Pure CSS - no JS needed

// ========================================
// 8. HAMBURGER MENU TRANSFORMATIONS
// ========================================
let hamburgerMenuBtns = document.querySelectorAll(".hamburger-menu .icon");
for (var i = 0; i < hamburgerMenuBtns.length; i++) {
  hamburgerMenuBtns[i].addEventListener("click",(e)=>{
    e.currentTarget.classList.toggle("active");
  });
}

// ========================================
// 9. HOVER POPUP LINKS
// ========================================
// Pure CSS - no JS needed

// ========================================
// 10. DRAGGABLE CIRCULAR MENU
// ========================================
const draggableNav = document.querySelector(".draggable-nav");
if(draggableNav){
  const draggableToggleBtn = draggableNav.querySelector(".toggle-btn");

  if(draggableToggleBtn){
    draggableToggleBtn.addEventListener("click", () => {
      draggableNav.classList.toggle("open");
    });
  }

  function onDrag({movementY}) {
    const navStyle = window.getComputedStyle(draggableNav),
          navTop = parseInt(navStyle.top),
          navHeight = parseInt(navStyle.height),
          windHeight = window.innerHeight;
    draggableNav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
    if(navTop > windHeight - navHeight){
      draggableNav.style.top = `${windHeight - navHeight}px`;
    }
  }

  draggableNav.addEventListener("mousedown", () => {
    draggableNav.addEventListener("mousemove", onDrag);
  });

  draggableNav.addEventListener("mouseup", () => {
    draggableNav.removeEventListener("mousemove", onDrag);
  });

  draggableNav.addEventListener("mouseleave", () => {
    draggableNav.removeEventListener("mousemove", onDrag);
  });
}
