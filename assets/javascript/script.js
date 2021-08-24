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
