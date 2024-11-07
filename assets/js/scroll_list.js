// let swiper;

// function initSwiper() {
//   if (window.innerWidth > 768 && !swiper) {
//     swiper = new Swiper('.swiper', {
//       direction: 'horizontal',
//       slidesPerView: 4,
//       breakpoints: {
//         1920: {
//           slidesPerView: 6,
//         },
//         1724: {
//           slidesPerView: 5,
//         },
//       },
//       loop: true,
//       pagination: {
//         el: '.swiper-pagination',
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });
//   } else if (window.innerWidth <= 768 && swiper) {
//     swiper.destroy(true, true); // Hủy Swiper khi kích thước màn hình nhỏ hơn 768px
//     swiper = undefined;
//   }
// }

// // Khởi tạo Swiper ban đầu
// initSwiper();


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

// Đăng ký sự kiện resize để cập nhật Swiper khi thay đổi kích thước màn hình
window.addEventListener('resize', () => {
  initSwiper();
});

//effect for menu
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
  const logo_sp = document.querySelector('.menu__logo-sp');

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
  logo_sp.classList.toggle('active');
  lgX.classList.toggle('active');
  line1.classList.toggle('active');
  line2.classList.toggle('active');
  line1.classList.toggle('actived');
  line2.classList.toggle('actived');
});








///////////////////effect for background

// (function() {
//     document.addEventListener("mousemove", parallax);
//     const elem = document.querySelector("#company-effect");

//     function parallax(e) {
//         let _w = window.innerWidth/2;
//         let _h = window.innerHeight/2;
//         let _mouseX = e.clientX;
//         let _mouseY = e.clientY;
//         let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
//         let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
//         let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
//         let x = `${_depth3}, ${_depth2}, ${_depth1}`;
//         elem.style.backgroundPosition = x;
//     }
// })();

document.addEventListener("DOMContentLoaded", () => {
  const companySection = document.getElementById("company-effect");

  if (companySection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Thêm sự kiện scroll khi phần tử vào view
          window.addEventListener("scroll", parallaxEffect);
        } else {
          // Ngừng lắng nghe sự kiện cuộn khi phần tử ra khỏi màn hình
          window.removeEventListener("scroll", parallaxEffect);
        }
      });
    }, { threshold: 0.1 }); // Ngưỡng để kích hoạt khi phần tử vào view 10%

    // Bắt đầu quan sát phần tử "company"
    observer.observe(companySection);
  } else {
    console.error("Element with ID 'company' not found.");
  }

  // Hàm hiệu ứng parallax, cập nhật liên tục theo vị trí cuộn
  function parallaxEffect() {
    const sectionTop = companySection.getBoundingClientRect().top; // Lấy vị trí hiện tại của section
    const offset = sectionTop * 0.1; // Tính toán offset cho hiệu ứng parallax
    companySection.style.transform = `translateY(${offset}px)`;
  }
});


