export const scrollAnimation = (selector) => {
  const block = document.querySelector(selector)
  if (block) {
    window.addEventListener('scroll', (e) => {
      const rect = block.getBoundingClientRect()
      const windowHeight = window.innerHeight || document.documentElement.clientHeight

      // if (rect.top < windowHeight && rect.bottom >= 0) {
      //   block.classList.add('_visible')
      // } else {
      //   block.classList.remove('_visible')
      // }

      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const percentage = Math.min(
          1,
          1 - Math.max(0, (windowHeight + rect.top) / (rect.height - windowHeight))
        ).toFixed(2)
        block.style.setProperty('--scroll-percentage', percentage)
      } else if (rect.top <= 0 && rect.bottom < windowHeight) {
        block.style.setProperty('--scroll-percentage', '1')
      } else if (rect.top > 0) {
        block.style.setProperty('--scroll-percentage', '0')
      }
    })
  }
}

export const switchHeader = () => {
  const header = document.querySelector('.header')
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        header.classList.add('_scrolled')
      } else {
        header.classList.remove('_scrolled')
      }
    })
  }
}

document.addEventListener('DOMContentLoaded', function () {
  scrollAnimation('.info')
  switchHeader()
})
