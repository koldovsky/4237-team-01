export default function initLatestPosts() {
    // Обертання зображення
    document.querySelectorAll('.latest-posts__image').forEach((img) => {
      img.addEventListener('click', () => {
        img.style.transform = 'rotate(360deg)';
        setTimeout(() => {
          img.style.transform = 'none';
        }, 1000);
      });
    });
  
    // Лайк
    document.querySelectorAll('.latest-posts__like-button').forEach((btn) => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('liked');
        btn.textContent = btn.classList.contains('liked') ? '❤️' : '👍';
      });
    });
  }