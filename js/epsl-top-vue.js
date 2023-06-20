const app = new Vue({
    el: '#app',
    data: {
     
    },
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  });

const epsllist = new Vue({
    el: '#epsllist',
    data: {
      works:
      ['Used Python to establish a magnitude estimation empirical formula for borehole stations'
        ,'Standard deviation of magnitude estimation was 0.22 while that for the current Earthquake Early Warning System was 0.43, which means a better range of estimation error.'
        ,'Estimated earthquake magnitude on a C-based system, accelerating estimation by about one second.'
        ,'Cleaned problematic data from 9,060 pieces of data over the previous four years with an automated tool written in Python.']
    },

  });