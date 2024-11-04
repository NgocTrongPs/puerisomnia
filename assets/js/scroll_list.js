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
