let slideHeight = 200
let slideWidth = 300

let container = document.querySelector('.container')

let options = {
  root: container,
  rootMargin: `-${(container.clientHeight - slideHeight) / 2}px -${
    (container.clientWidth - slideWidth) / 2
  }px`,
  threshold: 0.01,
  // threshold: 0,
}

let observer = new IntersectionObserver(handleIntersect, options)

let slides = document.querySelectorAll('.slide')

slides.forEach((slide) => {
  observer.observe(slide)
})

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('highlight')
    } else {
      entry.target.classList.remove('highlight')
    }
    // entry.target.classList.toggle("highlight", entry.target.isIntersecting);
    // if (entry.isIntersecting) {

    // }
    console.log(entry.target)
  })
}
