document.addEventListener('DOMContentLoaded', function () {
    // Инициализация Swiper
    const swiper = new Swiper(".gallery-swiper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
        },
    });

    // Плавная прокрутка по якорным ссылкам
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Предотвращаем стандартное поведение ссылки

            // Находим блок по указанному href и плавно скроллим к нему
            const targetId = this.getAttribute('href'); // получаем значение href (например, #about)
            const targetElement = document.querySelector(targetId); // находим элемент по ID

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Плавная анимация прокрутки
                });
            }
        });
    });

    // Проверка и показ cookie-баннера
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');

    // Функция для установки cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/`;
    }

    // Функция для получения cookie
    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(`${name}=`)) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }

    // Если пользователь ещё не принял cookies, показываем баннер
    if (!getCookie('cookiesAccepted')) {
        cookieBanner.style.display = 'block';
    }

    // При клике на "Accept" скрываем баннер и сохраняем флаг
    acceptButton.addEventListener('click', () => {
        setCookie('cookiesAccepted', 'true', 365); // Устанавливаем cookie на 1 год
        cookieBanner.style.display = 'none';
    });

    // Обработка формы
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Предотвращаем стандартное поведение формы
            window.location.href = 'thank-you-page.html'; // Переходим на страницу благодарности
        });
    }
});
