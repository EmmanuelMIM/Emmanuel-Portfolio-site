function createCarousel(carouselId, slides) {
  let currentIndex = 0;
  const carousel = document.getElementById(carouselId);

  const imgEl = carousel.querySelector(".slide img");
  const captionEl = carousel.querySelector(".slide .caption");
  const captionMainEl = carousel.querySelector(".slide .captionMain");

  function showSlide(index) {
    imgEl.src = slides[index].img;
    captionEl.textContent = slides[index].caption;
    captionMainEl.textContent = slides[index].captionMain;
  }

  carousel.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  carousel.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  // Initialize
  showSlide(currentIndex);
}

// Example: Carousel 1 slides
createCarousel("carousel1", [
  {
    img: "images/FantasyTravel.png",
    caption: "Step 1: Brainstorm Ideas",
    captionMain: "I thought of ways I can use the CSS art to create a unique website"
  },
  {
    img: "images/FantasyTravel.png",
    caption: "Step 2: fart around",
    captionMain: "I thought of ways I can use the CSS art to create a unique website"
  },
  {
    img: "images/FantasyTravel.png",
    caption: "Step 3: chicken nuggets",
    captionMain: "I thought of ways I can use the CSS art to create a unique website"
  },
  {
    img: "images/FantasyTravel.png",
    caption: "Step 4: backfliping",
    captionMain: "I thought of ways I can use the CSS art to create a unique website"
  }
  ,{
    img: "images/FantasyTravel.png",
    caption: "Step 5: eat",
    captionMain: "I thought of ways I can use the CSS art to create a unique website"
  }
]);

// Carousel 2 slides
createCarousel("carousel2", [
  {
    img: "images/Project2-1.png",
    caption: "Step 1: Planning",
    captionMain: "Outlined the structure of the website"
  },
  {
    img: "images/Project2-2.png",
    caption: "Step 2: Design",
    captionMain: "Picked colors, fonts, and layouts"
  }
]);

//  carousel3 
createCarousel("carousel3", [
  {
    img: "images/FantasyTravel.png",
    caption: "Step 1: Brainstorm Ideas",
    captionMain: "I thought of ways I can use the CSS art to create a unique website"
  },
  {
    img: "images/FantasyTravel.png",
    caption: "Step 2: fart around",
    captionMain: "I thought of ways I can use the CSS art to create a unique website"
  },
  {
    img: "images/FantasyTravel.png",
    caption: "Step 3: chicken nuggets",
    captionMain: "I thought of ways I can use the CSS art to create a unique website"
  },
  {
    img: "images/FantasyTravel.png",
    caption: "Step 4: backfliping",
    captionMain: "I thought of ways I can use the CSS art to create a unique website"
  }
  ,{
    img: "images/FantasyTravel.png",
    caption: "Step 5: eat",
    captionMain: "I thought of ways I can use the CSS art to create a unique website"
  }
]);

// Carousel 4 slides
createCarousel("carousel4", [
  {
    img: "images/FantasyTravel.png",
    caption: "Step 1: Brainstorm Ideas",
    captionMain: "I thought of ways I can use the CSS art to create a unique website"
  },
  {
    img: "images/FantasyTravel.png",
    caption: "Step 2: fart around",
    captionMain: "I thought of ways I can use the CSS art to create a unique website"
  },
  {
    img: "images/FantasyTravel.png",
    caption: "Step 3: chicken nuggets",
    captionMain: "I thought of ways I can use the CSS art to create a unique website"
  },
  {
    img: "images/FantasyTravel.png",
    caption: "Step 4: backfliping",
    captionMain: "I thought of ways I can use the CSS art to create a unique website"
  }
  ,{
    img: "images/FantasyTravel.png",
    caption: "Step 5: eat",
    captionMain: "I thought of ways I can use the CSS art to create a unique website"
  }
]);