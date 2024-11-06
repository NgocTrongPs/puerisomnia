let swiper;

function initSwiper() {
  if (window.innerWidth > 768 && !swiper) {
    swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      slidesPerView: 4,
      breakpoints: {
        1920: {
          slidesPerView: 6,
        },
        1724: {
          slidesPerView: 5,
        },
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else if (window.innerWidth <= 768 && swiper) {
    swiper.destroy(true, true); // Hủy Swiper khi kích thước màn hình nhỏ hơn 768px
    swiper = undefined;
  }
}

// Khởi tạo Swiper ban đầu
initSwiper();

// Theo dõi sự thay đổi kích thước màn hình
window.addEventListener('resize', () => {
  initSwiper();
});


// effect for menu
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll("#menu li a");

  const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5  // Mục tiêu cần xuất hiện ít nhất 50% trong viewport để kích hoạt
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          const link = document.querySelector(`#menu li a[href="#${entry.target.id}"]`);

          if (entry.isIntersecting) {
            menuLinks.forEach(link => link.classList.remove("active"));
            link.classList.add("active");
            console.log(`Added active to: ${link.href}`);
        }
      });
  }, observerOptions);

  sections.forEach(section => {
      observer.observe(section);
  });
});

//effect for text

function intro_title() {
  window.addEventListener('scroll', function() {
    const docTilElements = document.querySelectorAll('.doc-til');
  
    docTilElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  
        if (isVisible) {
            element.classList.add('active');
            const title = element.querySelector('.title');
            title.classList.add('active');
        }
    });
  });
}

window.addEventListener('load', () => {
  intro_title();
});

// effect for button
document.querySelector('.menu-logo').addEventListener('click', function() {
  const line1 = document.querySelector('.menu-logo__line1');
  const line2 = document.querySelector('.menu-logo__line2');
  const menu = document.querySelector('.menu');

  menu.classList.toggle('active');

  line1.classList.toggle('active');
  line2.classList.toggle('active');
  line1.classList.toggle('actived');
  line2.classList.toggle('actived');
});



document.addEventListener("DOMContentLoaded", function() {
  const infoElements = document.querySelectorAll(".info");
  let currentIndex = 0;

  function showNextInfo() {
      // Ẩn class hiện tại
      infoElements[currentIndex].classList.add("hide");
      infoElements[currentIndex].classList.remove("active");
      
      // Xác định index kế tiếp, quay về đầu nếu đã đến phần tử cuối cùng
      test = currentIndex;
      currentIndex = (currentIndex + 1) % infoElements.length;

      // Hiển thị class kế tiếp
      infoElements[currentIndex].classList.add("active");
      setTimeout(function() {
        infoElements[test].classList.remove("hide");
      }, 1000);
  }
  // Hiển thị phần tử đầu tiên ban đầu
  infoElements[currentIndex].classList.add("active");


  // Thiết lập vòng lặp để hiển thị mỗi class 'info' sau 5 giây
  setInterval(showNextInfo, 3000);
});