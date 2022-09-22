function scriptMain() {
  // Fix position of side anonymous.
  let right_anon = document.getElementById('right-anon');
  let left_anon = document.getElementById('left-anon');
  right_anon.style.left = window.innerWidth - (414 / 2);
  right_anon.style.top = 0;
  left_anon.style.left = 0 - (414 / 2);
  left_anon.style.top = 0;
  right_anon.style.position = 'fixed';
  left_anon.style.position = 'fixed';
}