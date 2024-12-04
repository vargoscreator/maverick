document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 600, // Длительность анимации
        once: false,   // Анимация повторяется при обратной прокрутке
    });
    

    const heroBtn = document.querySelector('.hero__btn');
    const popup = document.querySelector('.popup');
    const popupInner = document.querySelector(".popup__inner");
    const body = document.querySelector('.body');
    const popupClose = document.querySelector('.popup__close');
    heroBtn.addEventListener('click', () => {
        popup.classList.add('active')
        body.classList.add('no-scroll')
    });
    popupClose.addEventListener('click', () => {
        popup.classList.remove('active')
        body.classList.remove('no-scroll')
    });

    document.addEventListener("click", (event) => {
        if (popup.classList.contains("active") && !popupInner.contains(event.target) && !heroBtn.contains(event.target) ) {
            popup.classList.remove('active')
            body.classList.remove('no-scroll')
        }
    });


    const parallaxItems = [
        { selector: '.hero__lamp', strength: 150 },
        { selector: '.hero__icon', strength: 40 },
        { selector: '.hero__make', strength: 20 },
        { selector: '.hero__eye', strength: 120 },
        { selector: '.valore__maverick', strength: 20 },
        { selector: '.valore__consulting', strength: 30 },
        { selector: '.obiettivo-first', strength: 50 },
        { selector: '.obiettivo-last', strength: 30 },
        { selector: '.club__make', strength: 30 },
        { selector: '.partner__shape', strength: 70 },
    ];
    let isParallaxActive = window.innerWidth > 768;
    document.addEventListener('mousemove', (event) => {
        if (isParallaxActive) {
            parallaxItems.forEach(item => {
                const image = document.querySelector(item.selector);
                if (image) {
                    handleMouseMove(event, image, item.strength);
                }
            });
        }
    });
    const updateParallaxState = () => {
        isParallaxActive = window.innerWidth > 768;
        if (!isParallaxActive) {
            parallaxItems.forEach(item => {
                const image = document.querySelector(item.selector);
                resetImagePosition(image);
            });
        }
    };
    const resetImagePosition = (image) => {
        if (image) image.style.transform = 'none';
    };
    const handleMouseMove = (event, image, strength) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const moveX = (mouseX / window.innerWidth - 0.5) * strength; // Сила параллакса по X
        const moveY = (mouseY / window.innerHeight - 0.5) * strength; // Сила параллакса по Y
        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    window.addEventListener('resize', updateParallaxState);
    window.addEventListener('load', updateParallaxState);


    const header = document.querySelector('header');
    function handleScroll() {
        if (window.scrollY > 10 && window.innerWidth < 1000) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    function handleResize() {
        handleScroll();
    }
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleScroll();
    const headerBurger = document.querySelector(".header__burger");
    const headerBg = document.querySelector(".header__bg");
    const headerMenu = document.querySelector(".header__menu");
    const headerClose = document.querySelector(".header__menu-close");
    const headerLinks = document.querySelectorAll(".header__link");
    const toggleActive = () => {
        headerBg.classList.toggle("active");
        headerMenu.classList.toggle("active");
    };    
    const removeActive = () => {
        headerBg.classList.remove("active");
        headerMenu.classList.remove("active");
    };
    headerBurger.addEventListener("click", toggleActive);
    headerBg.addEventListener("click", removeActive);
    headerClose.addEventListener("click", removeActive);
    headerLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 1000) {
                removeActive();
            }
        });
    });
    
});
