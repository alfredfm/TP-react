export function ripple(event) {
  var el = event.currentTarget;

  var rippleEl = document.querySelector('span.ripple--span');
  if (!rippleEl) {
    rippleEl = document.createElement('span');
  }
  el.appendChild(rippleEl);

  var max = Math.max(el.offsetWidth, el.offsetHeight);
  rippleEl.style.width = rippleEl.style.height = max + 'px';

  var rect = el.getBoundingClientRect();

  rippleEl.style.left = event.clientX - (max/2) - rect.left + 'px';
  rippleEl.style.top = event.clientY - (max/2) - rect.top + 'px';

  rippleEl.style.background = el.style.background;
  rippleEl.style.opacity = .7;
  rippleEl.classList.add('ripple--span');
}
