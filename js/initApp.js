particlesJS("particle-nav",
 {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 0,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 140,
      "color": "#ffffff",
      "opacity": 0.6000850120433731,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);

let stringsMed1   = ["Software Engineer", "Web Developer", "Graduate Student", "Lifelong Learner"];
let stringsMed2   = ["Software Dev", "Web Developer", "MSCS Student", "Lifelong Learner"];
let stringsMobile = ["Software Dev", "Web Dev", "MSCS Student", "Learner"];
let stringsFull   = ["Software Engineer", "Web Developer", "Graduate Student", "Lifelong Learner"];

let typewriterHeading = new Typewriter('#typewriter-heading', {
  strings: stringsMed1,
  autoStart: true,
  loop: true
});

$(document).ready(function() {
  if($(window).width() < 399.50) {
    typewriterHeading = new Typewriter('#typewriter-heading', {
      strings: stringsMobile,
      autoStart: true,
      loop: true
    });
  } else if ($(window).width() < 499.50) {
    typewriterHeading = new Typewriter('#typewriter-heading', {
      strings: stringsMed1,
      autoStart: true,
      loop: true
    });
  } else if ($(window).width() < 767.50) {
    typewriterHeading = new Typewriter('#typewriter-heading', {
      strings: stringsFull,
      autoStart: true,
      loop: true
    });
  } else if ($(window).width() < 916.50) {
    typewriterHeading = new Typewriter('#typewriter-heading', {
      strings: stringsMed1,
      autoStart: true,
      loop: true
    });
  } else if ($(window).width() < 991.50) {
    typewriterHeading = new Typewriter('#typewriter-heading', {
      strings: stringsFull,
      autoStart: true,
      loop: true
    });
  } else if ($(window).width() < 1199.50) {
    typewriterHeading = new Typewriter('#typewriter-heading', {
      strings: stringsMed2,
      autoStart: true,
      loop: true
    });
  } else if ($(window).width() < 1450.50) {
    typewriterHeading = new Typewriter('#typewriter-heading', {
      strings: stringsMed1,
      autoStart: true,
      loop: true
    });
  } else {
    typewriterHeading = new Typewriter('#typewriter-heading', {
      strings: stringsFull,
      autoStart: true,
      loop: true
    });
  }
});

$(window).resize(function() {
  if($(window).width() < 399.50) {
    typewriterHeading = new Typewriter('#typewriter-heading', {
      strings: stringsMobile,
      autoStart: true,
      loop: true
    });
  } else if ($(window).width() < 499.50) {
    typewriterHeading = new Typewriter('#typewriter-heading', {
      strings: stringsMed1,
      autoStart: true,
      loop: true
    });
  } else if ($(window).width() < 767.50) {
    typewriterHeading = new Typewriter('#typewriter-heading', {
      strings: stringsFull,
      autoStart: true,
      loop: true
    });
  } else if ($(window).width() < 916.50) {
    typewriterHeading = new Typewriter('#typewriter-heading', {
      strings: stringsMed1,
      autoStart: true,
      loop: true
    });
  } else if ($(window).width() < 991.50) {
    typewriterHeading = new Typewriter('#typewriter-heading', {
      strings: stringsFull,
      autoStart: true,
      loop: true
    });
  } else if ($(window).width() < 1199.50) {
    typewriterHeading = new Typewriter('#typewriter-heading', {
      strings: stringsMed2,
      autoStart: true,
      loop: true
    });
  } else if ($(window).width() < 1450.50) {
    typewriterHeading = new Typewriter('#typewriter-heading', {
      strings: stringsMed1,
      autoStart: true,
      loop: true
    });
  } else {
    typewriterHeading = new Typewriter('#typewriter-heading', {
      strings: stringsFull,
      autoStart: true,
      loop: true
    });
  }
});

$('.carousel').carousel({
  interval: 3500
})