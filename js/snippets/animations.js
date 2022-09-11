var start = null;
var element = document.getElementById("anime");
const element2 = document.querySelector('iframe');

const animationDuration = 1000
const startValue = 36
const endValue = 100
const mapProgressTovalue = (currentProgress) => {
  return startValue + (endValue - startValue) * currentProgress / animationDuration
}
element.style.fontSize = startValue

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;

  if (element) {
    const newValue = mapProgressTovalue(progress)
    element.style.fontSize = newValue + 'px';

    if (progress < animationDuration) {
      window.requestAnimationFrame(step);
    }
  }
}

function step2(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;

  if (element2) {
    const newValue = mapProgressTovalue(progress)

    if (progress < animationDuration) {
      window.requestAnimationFrame(step);
    }
  }
}

const anim = () => {
  start = null;
  window.requestAnimationFrame(step);
};

document.querySelector('.text').addEventListener('click', (event) => {
  console.log('click .text')
  event.target.classList.add('text-big')
})

console.log('tut')

window.addEventListener('click', (event) => {
  console.log('click')
  element2.classList.add('big-iframe')
})

window.addEventListener("click", anim);
