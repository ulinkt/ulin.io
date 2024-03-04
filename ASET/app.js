/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


const phrases = ["cepat", "praktis", "murah"];
    let currentPhraseIndex = 0;
    const textElement = document.getElementById("changing-text");

    function changeText() {
        textElement.style.opacity = 0; // Fade out current text
        setTimeout(() => {
            textElement.textContent = phrases[currentPhraseIndex]; // Change text
            textElement.style.opacity = 1; // Fade in new text
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to next phrase or loop back to start
        }, 500); // Wait for half second during fade out before changing the text
    }

    // Initial call to set the first phrase and start the cycle
    changeText();

    // Change the text every 3 seconds
    setInterval(changeText, 3000);