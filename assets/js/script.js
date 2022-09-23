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

  let coding_image = document.getElementById('coding-image');
  let revolution_image = document.getElementById('revolution-image');
  let site_works = document.getElementById('site-work');

  window.addEventListener("resize", (event) => {
    if (window.innerWidth < 1100)
      coding_image.style.marginTop = ((site_works.clientHeight - coding_image.clientHeight) / 2) + "px";
    else
      coding_image.style.marginTop = 0;

    right_anon.style.left = window.innerWidth - (414 / 2);
    right_anon.style.top = 0;
    left_anon.style.left = 0 - (414 / 2);
    left_anon.style.top = 0;
    right_anon.style.position = 'fixed';
    left_anon.style.position = 'fixed';
  });
}