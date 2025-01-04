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