const check = document.getElementById('check');
const content = document.getElementById('content');

check.addEventListener('change', function() {
  if (this.checked) {
    content.classList.add('hidden');
  } else {
    content.classList.remove('hidden');
  }
});
