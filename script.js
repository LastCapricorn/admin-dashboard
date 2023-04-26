document.querySelector('div[role="button"]').addEventListener('click', toggleNav);

function toggleNav() {
  document.querySelector('body').classList.toggle('collapsed');
  document.querySelector('nav').classList.toggle('collapsed');
}