// access DOM elements
const preview = document.querySelector(".preview");
const previewMainImg = document.querySelector(".preview__main-img img");
const galleryImages = document.querySelectorAll(".gallery .boxes .box img");
const previewSumnails = document.querySelectorAll(".preview__sumnails .sumnail__box img");
const prevBtn = document.querySelector(".preview__navigations .preview__prev");
const nextBtn = document.querySelector(".preview__navigations .preview__next")
const closeBtn = document.querySelector(".close-btn");


const images = [
    "images/images_display/img-disp-01.png",
    "images/images_display/img-disp-02.png",
    "images/images_display/img-disp-03.png",
    "images/images_display/img-disp-04.png",
    "images/images_display/img-disp-05.png",
    "images/images_display/img-disp-06.png",
    "images/images_display/img-disp-07.png",
    "images/images_display/img-disp-08.png",
    "images/images_display/img-disp-09.png",
    "images/images_display/img-dip-10.png",
];

let currentIndex = 0;

// add event listener to each gallery image
galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        preview.classList.add("open");
        previewMainImg.src = images[index];
        currentIndex = index;
        setActiveSumnail(index, previewSumnails[index]);
    });
})

// add event listener to each sumanail image
previewSumnails.forEach((sumnail, index) => {
    sumnail.addEventListener("click", () => {
        currentIndex = index;
        previewMainImg.src = images[currentIndex];
        setActiveSumnail(index,sumnail);
    });
})

// add event listener to navigation buttons
nextBtn.onclick = () => {
    previewMainImg.src = images[++currentIndex % images.length];
    setActiveSumnail(currentIndex,previewSumnails[currentIndex % images.length]);
}
prevBtn.onclick = () => {
    if(currentIndex == 0) {
        currentIndex = images.length;
    }
    previewMainImg.src = images[--currentIndex % images.length];
    setActiveSumnail(currentIndex,previewSumnails[currentIndex % images.length]);
}

// close preview modal
closeBtn.onclick = () => {
    preview.classList.remove("open");
} 


// set active sumanail
function setActiveSumnail(index,sumnail) {
    document.querySelector(".preview__sumnails .active-sumnail").classList.remove("active-sumnail");
    sumnail.closest(".sumnail__box").classList.add("active-sumnail");
}
