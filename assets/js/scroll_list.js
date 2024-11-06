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
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll("#menu li a");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: Array.from(Array(101).keys(), i => i * 0.01) // Để có nhiều điểm mốc xác định diện tích hiển thị
  };

  const sectionVisibility = new Map(); // Để lưu trữ tỷ lệ hiển thị của mỗi section

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Cập nhật tỷ lệ hiển thị cho mỗi section
      sectionVisibility.set(entry.target, entry.intersectionRatio);
    });

    // Tìm section có tỷ lệ hiển thị lớn nhất
    const mostVisibleSection = Array.from(sectionVisibility.entries())
      .reduce((maxEntry, entry) => entry[1] > maxEntry[1] ? entry : maxEntry)[0];

    // Xóa lớp active ở tất cả liên kết và thêm lớp active vào liên kết của section chiếm diện tích lớn nhất
    menuLinks.forEach(link => link.classList.remove("active"));
    const activeLink = document.querySelector(`#menu li a[href="#${mostVisibleSection.id}"]`);
    if (activeLink) activeLink.classList.add("active");
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
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
  const effect_move = document.querySelectorAll('.effect-move');
  const list = document.querySelectorAll('.menu-list__item');
  const lgX = document.querySelector('.lg');

  menu.classList.toggle('active');
  // effect_move.forEach((item, index) => {
  //   setTimeout(() => {
  //     item.classList.toggle('active');
  //   }), index * 100;
  // })
  // list.forEach((item, index) => {
  //   setTimeout(() => {
  //     item.classList.add('active');
  //   }, index * 300); // Thêm 'active' cho từng phần tử sau mỗi 500ms
  // });
  effect_move.forEach(item => item.classList.toggle('active'));
  list.forEach(item => item.classList.toggle('active'));
  lgX.classList.toggle('active');
  line1.classList.toggle('active');
  line2.classList.toggle('active');
  line1.classList.toggle('actived');
  line2.classList.toggle('actived');
});

