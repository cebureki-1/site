
const NUMBER_OF_SNOWFLAKES = 300;
const MAX_SNOWFLAKE_SIZE = 5;
const MAX_SNOWFLAKE_SPEED = 2;
const SNOWFLAKE_COLOUR = '#ddd';
const snowflakes = [];

const background = document.querySelector(".background")

const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.pointerEvents = 'none';
canvas.style.top = '0px';
canvas.width = window.innerWidth;
canvas.height = background.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');


const createSnowflake = () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
  color: SNOWFLAKE_COLOUR,
  speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
  sway: Math.random() - 0.5 // next
});

const drawSnowflake = snowflake => {
  ctx.beginPath();
  ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
  ctx.fillStyle = snowflake.color;
  ctx.fill();
  ctx.closePath();
}

const updateSnowflake = snowflake => {
  snowflake.y += snowflake.speed;
  snowflake.x += snowflake.sway; // next
  if (snowflake.y > canvas.height) {
    Object.assign(snowflake, createSnowflake());
  }
}

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snowflakes.forEach(snowflake => {
    updateSnowflake(snowflake);
    drawSnowflake(snowflake);
  });

  requestAnimationFrame(animate);
}

for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
  snowflakes.push(createSnowflake());
}

window.addEventListener('DOMContentLoaded', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});



// setInterval(animate, 15);
animate()



// timer




document.addEventListener('DOMContentLoaded', () => {
  // Установите конечную дату
  const deadline = new Date('2024-12-31T23:59:59');

  // Найдите элементы DOM
  const elDays = document.querySelector('.timer__days');
  const elHours = document.querySelector('.timer__hours');
  const elMinutes = document.querySelector('.timer__minutes');
  const elSeconds = document.querySelector('.timer__seconds');

  // Функция склонения числительных
  const declensionNum = (num, words) => {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
  };

  // Функция обновления таймера
  const updateTimer = () => {
    const now = new Date();
    const diff = Math.max(0, deadline - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    elDays.textContent = String(days).padStart(2, '0');
    elHours.textContent = String(hours).padStart(2, '0');
    elMinutes.textContent = String(minutes).padStart(2, '0');
    elSeconds.textContent = String(seconds).padStart(2, '0');

    elDays.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    elHours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    elMinutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    elSeconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);

    if (diff === 0) {
      clearInterval(timerId);
    }
  };

  // Запустите таймер
  updateTimer();
  const timerId = setInterval(updateTimer, 1000);

});
const mainHeader = document.querySelector("#main-header");
const scrollHeader = document.querySelector("#scroll-header");

window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    mainHeader.style.display = "none";
    scrollHeader.style.display = "flex";
    scrollHeader.classList.add("active");
  } else {
    mainHeader.style.display = "flex";
    scrollHeader.style.display = "none";
    scrollHeader.classList.remove("active");
  }
});

let cards = [
  {
    URL: "picture/item-1.avif",
    Name: "hoodie dog",
    price: "300",
  },
  {
    URL: "picture/item-2.avif",
    Name: "Elf",
    price: "200",
  },
  {
    URL: "picture/item-3.avif",
    Name: "t-shirt Santa",
    price: "1599",
  },
  {
    URL: "picture/item-4.avif",
    Name: "Gingerbread earrings",
    price: "4.99",
  },
  {
    URL: "Picture/item-5.avif",
    Name: "Aesthetic radio",
    price: "99.9",
  },
  {
    URL: "picture/item-6.avif",
    Name: "Dragon teapot",
    price: "79.9",
  }
]

const gridCard = document.querySelector(".grid-card")

cards.forEach(e => {
  const card = document.createElement('div');
  const cardImage = document.createElement('img')
  const cardName = document.createElement('h2');
  const price = document.createElement('p');

  card.classList.add('product');

  cardImage.src = e.URL;
  cardName.textContent = e.Name;
  price.textContent = e.price + '$';

  card.appendChild(cardImage);
  card.appendChild(cardName);
  card.appendChild(price);
  gridCard.appendChild(card);

  card.addEventListener('mouseenter', () => {
    card.style.background = "rgba(166, 138, 138, 0.14)";
  });

  card.addEventListener('mouseleave', () => {
    card.style.background = "white";
  });
});

const emailForm = document.querySelector('#emailForm');
const emailInput = document.querySelector('#email');
const emailMessage = document.querySelector('#mailMessage');
const emailButton = document.querySelector('#emailButton');

emailForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!emailInput.value.includes('@')) {
    emailInput.placeholder = 'Email is invalid. Use @';
    emailMessage.style.display = "none"
    emailButton.textContent = 'Try again';
    emailButton.style.color = 'White';
    emailButton.style.width = "105px"
    emailButton.style.fontFamily = `"Montserrat", serif`
    emailButton.style.fontSize = "13.3px"
    emailButton.style.background = "red"
  } else {
    emailInput.placeholder = 'Email is valid!';
    emailMessage.style.display = "flex"
    emailButton.textContent = 'SUBSCRIBE';
    emailButton.style.color = 'black';
    emailButton.style.width = "105px"
    emailButton.style.fontSize = "13.3px"
    emailButton.style.color = 'White'
    emailButton.style.background = "green"
  }

  emailInput.value = ""
});

const comment = document.querySelector("#comments")
emailMessage.addEventListener("submit", (e) => {
  e.preventDefault();

  comments.placeholder = "Thank you for your letter, Santa will read it."
  comments.style.fontSize = "25px"
  
})

const carousel = document.querySelector('.carousel');
const cardss = document.querySelectorAll('.carousel-card');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 40;
  carousel.style.transform = `translateX(${offset}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cardss.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cardss.length) % cards.length;
  updateCarousel();
});

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.getAttribute('data-index'));
    updateCarousel();
  });
});

// const wish = document.querySelector("#wish")
// const message = document.querySelector("#wishsend")

// comments.addEventListener("input", (e) =>
  

//   wish.textContent = comments.value; 
//   comments.value = "";
// )



