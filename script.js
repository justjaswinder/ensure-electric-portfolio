// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile Menu
const menuToggle=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");
menuToggle.addEventListener("click",()=>{
  navLinks.classList.toggle("active");
  menuToggle.textContent=navLinks.classList.contains("active")?"✖":"☰";
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    const target=document.querySelector(link.getAttribute("href"));
    if(target){
      target.scrollIntoView({behavior:"smooth"});
      navLinks.classList.remove("active");
      menuToggle.textContent="☰";
    }
  });
});

// Scroll Reveal
const revealEls=document.querySelectorAll("section,.project-card,.card");
function revealOnScroll(){
  const trig=window.innerHeight*0.85;
  revealEls.forEach(el=>{
    const top=el.getBoundingClientRect().top;
    if(top<trig)el.classList.add("show");
  });
}
revealEls.forEach(el=>el.classList.add("hidden"));
window.addEventListener("scroll",revealOnScroll);
window.addEventListener("load",revealOnScroll);

// ---------- LIGHTBOX ----------
const lightbox=document.getElementById("lightbox");
const lightboxImage=document.getElementById("lightboxImage");
const closeBtn=document.getElementById("closeBtn");
const nextBtn=document.getElementById("nextBtn");
const prevBtn=document.getElementById("prevBtn");
const images=[...document.querySelectorAll(".project-image img")];
let currentIndex=0;

images.forEach((img,idx)=>{
  img.addEventListener("click",()=>{
    currentIndex=idx;
    showImage();
    lightbox.style.display="flex";
  });
});

function showImage(){
  lightboxImage.src=images[currentIndex].src;
}

closeBtn.addEventListener("click",()=>lightbox.style.display="none");
nextBtn.addEventListener("click",()=>{
  currentIndex=(currentIndex+1)%images.length;
  showImage();
});
prevBtn.addEventListener("click",()=>{
  currentIndex=(currentIndex-1+images.length)%images.length;
  showImage();
});

// Close on background click
lightbox.addEventListener("click",e=>{
  if(e.target===lightbox)lightbox.style.display="none";
});
