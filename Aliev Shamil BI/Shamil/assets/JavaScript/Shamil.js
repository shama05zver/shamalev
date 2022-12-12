const scrollOne = document.querySelector('#scrollone')
const sectionOne = document.querySelector('#section1')


const scrollTwo = document.querySelector('#scrolltwo')
const sectionTwo = document.querySelector('#section2')


const scrollThree = document.querySelector('#scrollthree')
const sectionThree = document.querySelector('#section3')


const scrollFour = document.querySelector('#scrollfour')
const sectionFour = document.querySelector('#section4')


const scrollFive = document.querySelector('#scrollfive')
const sectionFive = document.querySelector('#section5')


const homes = document.querySelectorAll('.home')
const start = document.querySelector('.start')


const offset = 100
const scrollUp = document.querySelector('.scroll-up')
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path')
const pathLength = scrollUpSvgPath.getTotalLength()

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`
scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms'

const getTop = () => window.pageYOffset || document.documentElement.scrollTop

// Функция считающая сколько надо сделать заливки!
const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight
    const dashoffset = (pathLength - (getTop() * pathLength / height))

   scrollUpSvgPath.style.strokeDashOffset = dashoffset
}

// Функция для переключения классов активна-неактивна!
window.addEventListener('scroll', () => {
    updateDashoffset()
    if (getTop() > offset) {
        scrollUp.classList.add('scroll-up--active')
    } else {
        scrollUp.classList.remove('scroll-up--active')
    }
})
// Функция отвечающая на нажатие ктопки!
scrollUp.addEventListener('click', () => {
    window.scroll({
        top:0, 
        behavior: 'smooth' 
    })
})



function scrollTo(element){
    window.scroll({
        left:0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

scrollOne.addEventListener('click', () => {
    scrollTo(sectionOne)
})

scrollTwo.addEventListener('click', () => {
    scrollTo(sectionTwo)
})

scrollThree.addEventListener('click', () => {
    scrollTo(sectionThree)
})

scrollFour.addEventListener('click', () => {
    scrollTo(sectionFour)
})

scrollFive.addEventListener('click', () => {
    scrollTo(sectionFive)
})

function homeTo(){
    window.scroll({
        left:0,
        top:0,
        behavior: 'smooth'
    })
}

homes.forEach(function(home){
    home.addEventListener('click', function(e) {
        homeTo(start)
    })
})

// function homeTo() {
//     window.scroll({
//         left:0,
//         top: element.offsetTop,
//         behavior: 'smooth'
//     })
// }

// for (const home of homes) {
//         home.addEventListener('click', () => {
//         homeTo(sectionFive)
//         // clearActiveClasses()
//         // home.classList.add('active')
//     })
// }