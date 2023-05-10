function checkScreenWidth () {
  if (document.documentElement.clientWidth < 703) {
    document.querySelector('body').classList.add('collapsed')
    document.querySelector('nav').classList.add('collapsed', 'fixed')
  } else {
    document.querySelector('nav').classList.remove('fixed')
  }
}

function toggleNav () {
  if (!document.querySelector('nav').classList.contains('fixed')) {
    document.querySelector('body').classList.toggle('collapsed')
    document.querySelector('nav').classList.toggle('collapsed')
  }
}

checkScreenWidth()

document
  .querySelector('div[role="button"]')
  .addEventListener('click', toggleNav)
window.addEventListener('resize', checkScreenWidth)
