const images = [{
    url: "./images/rostov1.png",
    title: "Rostov-on-Don, Admiral",
    city: "Rostov-on-Don<br> LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request"
  }, 
  {
    url: "./images/sochi.png",
    title: "Sochi Thieves",
    city: "Sochi<br> Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request"
  }, 
  {
    url: "./images/rostov2.png",
    title: "Rostov-on-Don Patriotic",
    city: "Rostov-on-Don<br> Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request"
  }];
  
  function initSlider() {
   if (!images || !images.length) return;
  
    let sliderImages = document.querySelector(".slider__images");
    let sliderArrows = document.querySelector(".slider__panel");
    let sliderDots = document.querySelector(".slider__dots");
  
    let sliderTitle = document.querySelector(".slider__nav__item");
    let textCity = document.querySelector(".slider__text__city");
    let textArea = document.querySelector(".slider__text__area");
    let textTime = document.querySelector(".slider__text__time");
    let textCost = document.querySelector(".slider__text__cost");
  
    initTitle();
    initImages();
    initArrows();
    initDots();
    initText();
    
   function initImages() {
     images.forEach((image, index) => {
       let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
       sliderImages.innerHTML += imageDiv;
     });
   }
   
   function initArrows() {
     sliderArrows.querySelectorAll(".slider__arrows").forEach(arrow => {
       arrow.addEventListener("click", function() {
         let curNumber = +sliderImages.querySelector(".active").dataset.index;
         let nextNumber;
         if (arrow.classList.contains("left")) {
           nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
         } else {
            nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
         }
         moveSlider(nextNumber);
       });
     });
   }
   
   function initDots() {
     images.forEach((image, index) => {
       let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
       sliderDots.innerHTML += dot;
     });
     sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
       dot.addEventListener("click", function() {
         moveSlider(this.dataset.index);
       });
     });
   }
   
   function initText() {
      images.forEach((image, index) => {
        let cityDiv = `<p class="p-general__text  n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].city}</p>`;
        textCity.innerHTML += cityDiv;
        let timeDiv = `<p class="p-general__text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].time}</p>`;
        textTime.innerHTML += timeDiv;
        let areaDiv = `<p class="p-general__text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].area}</p>`;
        textArea.innerHTML += areaDiv;
        let costDiv = `<p class="p-general__text n${index} ${index === 0 ? "active" : ""}" data-index="${index}">${images[index].cost}</p>`;
        textCost.innerHTML += costDiv;
      });
    }
  
   function initTitle() {
      images.forEach((image, index) => {
        let navItemsDiv = `<li class="slider__nav__item n${index} ${index === 0 ? "active" : ""}" data-index="${index}"><a>${images[index].title}</a></li>`;
        sliderTitle.innerHTML += navItemsDiv;
      });
      sliderTitle.querySelectorAll(".slider__nav__item").forEach(item => {
        item.addEventListener("click", function() {
          moveSlider(this.dataset.index);
        });
      });
    }
  
   function moveSlider(num) {
      sliderImages.querySelector(".active").classList.remove("active");
      sliderImages.querySelector(".n" + num).classList.add("active");
      sliderDots.querySelector(".active").classList.remove("active");
      sliderDots.querySelector(".n" + num).classList.add("active");
      textCity.querySelector(".active").classList.remove("active");
      textCity.querySelector(".n" + num).classList.add("active");
      textTime.querySelector(".active").classList.remove("active");
      textTime.querySelector(".n" + num).classList.add("active");
      textArea.querySelector(".active").classList.remove("active");
      textArea.querySelector(".n" + num).classList.add("active");
      textCost.querySelector(".active").classList.remove("active");
      textCost.querySelector(".n" + num).classList.add("active");
      sliderTitle.querySelector(".active").classList.remove("active");
      sliderTitle.querySelector(".n" + num).classList.add("active");
   }
   
  }

  document.addEventListener("DOMContentLoaded", initSlider);