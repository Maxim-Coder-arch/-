
//-----------после небольшой проверки стилей запускается замедленный скроль-----------

let forDocumentStyoles = document.readyState === 'loading' ? true : false;
if (window.innerWidth > 700) {
    if (forDocumentStyoles) {
        let scrollSpeed = 0;
        let isScrolling = false;
        window.addEventListener("wheel", function (event) {
            event.preventDefault(); 
            scrollSpeed += event.deltaY * 0.09;
            if (!isScrolling) {
                isScrolling = true;
                requestAnimationFrame(smoothScroll);
            };
        }, { passive: false });
        function smoothScroll() {
            scrollSpeed *= 0.87; 
            window.scrollBy(0, scrollSpeed);
            if (Math.abs(scrollSpeed) > 0.5) {
                requestAnimationFrame(smoothScroll);
            } else {
                isScrolling = false;
            };
        };
    };
}else{
    if (forDocumentStyoles) {
        let scrollSpeed = 0;
        let isScrolling = false;
        window.addEventListener("wheel", function (event) {
            event.preventDefault(); 
            scrollSpeed += event.deltaY * 0.12;
            if (!isScrolling) {
                isScrolling = true;
                requestAnimationFrame(smoothScroll);
            };
        }, { passive: false });
        function smoothScroll() {
            scrollSpeed *= 0.87; 
            window.scrollBy(0, scrollSpeed);
            if (Math.abs(scrollSpeed) > 0.5) {
                requestAnimationFrame(smoothScroll);
            } else {
                isScrolling = false;
            };
        };
    };
}
//----------------проверим загрузку стилей---------------------------
(function() {
    var type = document.querySelectorAll('link[rel="stylesheet"]');
    var tLoad = (type.length > 0 && typeof window !== 'undefined') ? document.addEventListener('DOMContentLoaded', ()=> {setTimeout(function() {
        document.body.classList.add('loaded');
        setTimeout(()=> {
            document.querySelector('.section-left').style.display = 'none';
            document.querySelector('.section-right').style.display = 'none';
            document.querySelector('.writer').style.display = 'none';
        },1400);
        setTimeout(()=> {
            document.getElementById('typewriter').style.display = 'none';
            main();
        },250);
    }, 1300); }) : console.error('link[rel = "stylesheet"]');
})();
//-------------------------------------------------------------------

function main() {
    //----------------эффект при наведении на меню--------------------
    !function() {
        const t = [...Array(8)].map((_, i) => document.querySelectorAll(`.li${i + 1}`));

        t.forEach(ElementList => {
            ElementList.forEach(Element => {
                Element.addEventListener('mouseover', () => {
                    anime({
                        targets: Element,
                        scale: 1.1,
                        duration: 300,
                        easing: 'easeInOutQuad'
                    });
                });

                Element.addEventListener('mouseleave', () => {
                    anime({
                        targets: Element,
                        scale: 1,
                        duration: 300,
                        easing: 'easeInOutQuad'
                    });
                });
            });
        });
    }();
    //----------------------------------------------------------------------

    //------------------------анимация при загрузке-------------------------
    !function() {
        const t = [...Array(8)].map((_, i) => document.querySelectorAll(`.li${i + 1}`));
        t.forEach(ElementList => {
            ScrollReveal().reveal(ElementList, {
                origin: 'top',
                distance: '50px',
                opacity:0,
                duration:600,
                easing:'ease-in-out',
            });
        });
        ScrollReveal().reveal('.alarab', {scale:1.1, easing:'ease-in-out'});
    }();
    ScrollReveal().reveal('#clc', {
        origin:'top',
        distance:'50px',
        opacity:0,
        delay:100,
        duration:600,
        easing:'ease-in-out'
    });
    ScrollReveal().reveal('.w', {
        origin:'top',
        distance:'30px',
        opacity:0,
        delay:200,
        duration:600,
        easing:'ease-in-out'
    });
    //----------------------------------------------------------------------


    //------------------анимации при скролле--------------------------------
    

    ScrollReveal().reveal('#pillow', {
        origin:'bottom', 
        distance:'100px', 
        duration:600, 
        easing:'ease-in-out', 
        delay:200
    });
    ScrollReveal().reveal('#atmosphere', {
        origin:'bottom',
        distance:'80px',
        viewFactor: 0.7,
        opacity:0,
        duration:800,
        easing:'ease-in-out'
    });
    document.addEventListener('scroll', ()=> {
        const sc = window.scrollY;
        if(sc > 1) {
            gsap.to('.menu', {
                backgroundColor:'rgba(0, 0, 0, 0.8)',
                color:'white',
                borderColor:'black',
                ease:'power2.out'
            });
            gsap.to('#setColl', {
                height:'5vh',
                ease:'power2.out'
            });
        }else{
            gsap.to('.menu', {
                backgroundColor:'#ffffff6d',
                color:'black',
                ease:'power2.out'
            }),
            gsap.to('#setColl', {
                height:'10vh',
                ease:'power2.out'
            });
        };
    });
    ScrollReveal().reveal('.mirror', {
        origin:'bottom',
        distance:'70px',
        opacity:0,
        duration:700,
        easing:'ease-in-out'
    });


    //------------анимация процентного соотношения популярности---------------

    const label1 = document.querySelector('#label1')
    , label2 = document.querySelector('#label2')
    , label3 = document.querySelector('#label3')
    , label4 = document.querySelector('#label4')
    , label5 = document.querySelector('#label5')
    , labelsFull = [label1, label2, label3, label4, label5];
    ScrollReveal().reveal(labelsFull, {origin:'bottom', distance:'30px', opacity:0, interval:100, duration:1000, viewfactor:0.9});
    const numbers = document.querySelectorAll('.number');
        function animateNumber(element, target) {
            let current = 0;
            const duration = 2000; 
            const step = Math.ceil(target / (duration / 16)); 
            function updateNumber() {
                if (current < target) {
                    current += step;
                    if (current > target) current = target; 
                    element.textContent = current + "%"; 
                    requestAnimationFrame(updateNumber);
                }
            }
            updateNumber();
        }
        function checkVisibility() {
            numbers.forEach(number => {
                const rect = number.getBoundingClientRect();
                const isVisible = (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
                if (isVisible && !number.dataset.animated) {
                    number.dataset.animated = true; 
                    const target = parseInt(number.dataset.target);
                    animateNumber(number, target);
                }
            });
        }
        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('load', checkVisibility);
        ScrollReveal().reveal('.wt', {
            origin:'botom',
            distance:'60px',
            opacity:0,
            duration:800,
            easing:'ease-in-out'
        });
        ScrollReveal().reveal('.container', {
            origin:'left',
            distance:'100px',
            duration:700,
            opacity:0,
            easing:'ease-in-out'
        })
};

