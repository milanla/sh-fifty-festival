function makeMarquee() {
  const title = 'FIFTY Music Festival — November 10–12, Desert Valley'
  const marqueeText = new Array(50).fill(title)
  const marquee = document.querySelector('.marquee span')

  marquee.innerHTML = marqueeText.join(' — ')
}

makeMarquee()

const random = (min, max) => {
  return Math.floor(Math.random() * (max + min + 1)) + min
}

const circles = document.querySelectorAll('.circle')
const squiggles = document.querySelectorAll('.squiggle')

circles.forEach((circle, index) => {
  circle.animate([
    { transform: 'scale(1)' },
    { transform: 'scale(1.3)' },
    { transform: 'scale(1)' }
  ], {
    delay: 300 * index,
    duration: 3000,
    iterations: Infinity
  })
})

squiggles.forEach((squiggle, index) => {
  const randomNum = random(0, 45)

  squiggle.animate([
    { transform: 'rotate(0deg)' },
    { transform: `rotate(${randomNum}deg)` },
    { transform: 'rotate(0deg)' }
  ], {
    delay: 300 * index,
    duration: 5000,
    iterations: Infinity
  })
})

// InView - Adding animation when each section is scroll into view
inView('.section')
  .on('enter', section => {
    section.classList.add('in-viewport')
  })
  .on('exit', section => {
    section.classList.remove('in-viewport')
  })

inView.threshold(0.2)

const sections = document.querySelectorAll('.section')

sections.forEach((section, index) => {
  const artists = section.querySelectorAll('.lineup li')
  const shapes = section.querySelectorAll('.shape')

  artists.forEach((artist, index) => {
    const delay = index * 100
    artist.style.transitionDelay = `${delay}ms`
  })

  shapes.forEach((shape, index) => {
    const delay = artists.length + index * 100
    shape.style.transitionDelay = `${delay}ms`
  })
})

// Smooth scrolling
const scrollLinks = document.querySelectorAll('.js-scroll')

scrollLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    const href = link.getAttribute('href')

    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    })
  })
})
