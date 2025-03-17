
//-----------пока страница загружается, поочередно набираются буквы--------------

function typeWriter(text, element, delay = 100) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        }
    }
    type();
}
const text = "Тихий дворик";
const typewriterElement = document.getElementById('typewriter');
typeWriter(text, typewriterElement, 80);