// second navbar and button

let Scrolling = document.querySelector('html , body');
let scrollButton = document.querySelector('.scroll-top');
let secNav = document.querySelector('.sec-nav');

window.addEventListener("scroll", function () {
    // console.log(Scrolling.scrollTop);
    if (Scrolling.scrollTop >= 50) {
        // second nav 
        secNav.style.display = 'block';
        secNav.classList.remove('animate__animated', 'animate__slideOutUp');
        secNav.classList.add('animate__animated', 'animate__slideInDown');
        // scroll button
        scrollButton.style.display = 'block';
        scrollButton.classList.remove('animate__animated', 'animate__fadeOutDown');
        scrollButton.classList.add('animate__animated', 'animate__fadeInUp');
        // clicl button function
        scrollButton.addEventListener('click', function () {
            window.scrollTo(0, 0);
        })
    } else {
        // second nav 
        secNav.classList.remove('animate__animated', 'animate__slideInDown');
        secNav.classList.add('animate__animated', 'animate__slideOutUp');

        // scroll button
        scrollButton.classList.remove('animate__animated', 'animate__fadeInUp');
        scrollButton.classList.add('animate__animated', 'animate__fadeOutDown');
    }
})

// active navlink 

let sections = document.querySelectorAll('section');
// console.log(sections);
let navLi = document.querySelectorAll('.sec-nav .container .list ul li')
// console.log(navLi);

window.addEventListener("scroll", function () {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHieght = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHieght / 4)) {
            current = section.getAttribute('id');
        }
    })
    // console.log(current);
    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active');
        }
    })
})

// // active accordion list link

let accordionListLink = document.querySelectorAll('.accordion-list .list li button');
// console.log(accordionListLink);

for (let buttons = 0; buttons < accordionListLink.length; buttons++) {
    accordionListLink[buttons].addEventListener('click', function () {
        // delete active link 
        for (let delActive = 0; delActive < accordionListLink.length; delActive++) {
            accordionListLink[delActive].classList.remove('active');
        }
        // add active link
        this.classList.add('active');

    })
}


// faq accordion
let Qa = document.querySelectorAll('.accordion-item');
let accordionQuestions = document.querySelectorAll('.accordion-link');
let minusIcon = document.querySelectorAll('.m-icon');
let plusIcon = document.querySelectorAll('.p-icon');


for (let i = 0; i < accordionQuestions.length; i++) {
    Qa[i].classList.add("main-color");

    accordionQuestions[i].addEventListener('click', function () {

        let theAnswer = this.nextElementSibling;
        if (plusIcon[i].style.display == 'none') {
            theAnswer.style.display = "none";
            plusIcon[i].style.display = 'block';
            minusIcon[i].style.display = 'none';
            Qa[i].classList.add("main-color");
            minusIcon[i].classList.remove('qa-link');
            accordionQuestions[i].classList.remove('qa-link');
        } else {
            theAnswer.style.display = "block";
            minusIcon[i].style.display = 'block';
            plusIcon[i].style.display = 'none';
            Qa[i].classList.remove("main-color");
            minusIcon[i].classList.add('qa-link');
            accordionQuestions[i].classList.add('qa-link');
        }
    });
}






// link etween left list and right accordion

let Btn = document.querySelectorAll(".btns");
let accordion = document.querySelectorAll(".accordion");
for (let i = 0; i <= Btn.length; i++) {
    for (let j = 0; j <= accordion.length; j++) {
        if (i != j) {
            Btn[i].addEventListener('click', function (eo) {
                accordion[j].classList.add('hide');
                accordion[j].classList.remove('show');
                // console.log("add hide and remove show");
            });
        } else {
            Btn[i].addEventListener('click', function (eo) {
                accordion[j].classList.remove('hide');
                accordion[j].classList.add('show');
                // console.log("add show and remove hide");
            });
        }
    }
}