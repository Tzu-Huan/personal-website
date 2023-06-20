
const scrollDownArrow = document.querySelector('.scroll-down-arrow');
const scrollDowntext = document.querySelector('.scroll-down-text');
const backToTop = document.querySelector('.back-to-top');

scrollDownArrow.addEventListener('click', () => {
  window.scrollTo({
    top: document.querySelector('.container-about').offsetTop,
    behavior: 'smooth'
  });
});
scrollDowntext.addEventListener('click', () => {
    window.scrollTo({
      top: document.querySelector('.exp').offsetTop,
      behavior: 'smooth'
    });
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: document.querySelector('nav').offsetTop,
      behavior: 'smooth'
    });
  });







// window.addEventListener('scroll', floatUpText);

// function floatUpText() {
//     var textAbout = document.querySelector('.text-about');
//     var textAboutPosition = textAbout.getBoundingClientRect().top;
//     var windowHeight = window.innerHeight;

//     if (textAboutPosition < windowHeight - 100) {
//         textAbout.classList.add('float-up');
//         window.removeEventListener('scroll', floatUpText);
//     }
// }
