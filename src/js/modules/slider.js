function swiperSlider () {
  const swiper = new Swiper('.swiper-container', {

    allowTouchMove: false,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let prevSlide = document.querySelector(".swiper-button-prev");
  let nextSlide = document.querySelector(".swiper-button-next");
  let countSlider = document.querySelector(".slider__count span");
  let totalSlider = document.querySelector(".slider__total span");
  let numberOfSlides = document.querySelectorAll(".swiper-slide");
  let count = 1;

  function totalCount() {
    let total = numberOfSlides.length;
    totalSlider.innerHTML =  addPrefix(total);
  };

  let slideCounterNext = () => {
    
    if (count < 3 ) {
        count++;
    } else {
        count = 1;
    }
    countSlider.innerHTML = addPrefix(count);
  };

  let slideCounterPrev = () => {
    
    if (count > 1) {
        count--;
    } else {
        count = 3;
    }
    countSlider.innerHTML = addPrefix(count);
  };

  function addPrefix (num) {
      if (num < 10) {
        num = '0' + num;
        return num;
      }
  }

  nextSlide.addEventListener('click', slideCounterNext);
  prevSlide.addEventListener('click', slideCounterPrev);
  totalCount();
}
  
export default swiperSlider;

