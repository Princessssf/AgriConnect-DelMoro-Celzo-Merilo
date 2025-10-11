// ===== PAGE SWITCHING =====
const buttons = document.querySelectorAll('.navigation button');
const pages = document.querySelectorAll('.page');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.target) {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      pages.forEach(p => p.classList.remove('active'));
      document.getElementById(btn.dataset.target).classList.add('active');
    }
  });
});

// ===== MODALS =====
const inboxBtn = document.getElementById('inboxBtn');
const settingsBtn = document.getElementById('settingsBtn');
const inboxModal = document.getElementById('inboxModal');
const settingsModal = document.getElementById('settingsModal');
const closeBtns = document.querySelectorAll('.close');

inboxBtn.onclick = () => inboxModal.style.display = 'flex';
settingsBtn.onclick = () => settingsModal.style.display = 'flex';

closeBtns.forEach(btn => btn.onclick = () => {
  inboxModal.style.display = 'none';
  settingsModal.style.display = 'none';
});

window.onclick = (e) => {
  if (e.target === inboxModal) inboxModal.style.display = 'none';
  if (e.target === settingsModal) settingsModal.style.display = 'none';
};

// ===== DARK MODE =====
const darkToggle = document.getElementById('darkModeToggle');

// Restore last state
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  darkToggle.checked = true;
}

darkToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark', darkToggle.checked);
  localStorage.setItem('theme', darkToggle.checked ? 'dark' : 'light');
});
