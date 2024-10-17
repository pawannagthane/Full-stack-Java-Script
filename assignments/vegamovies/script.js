
const currentUrl = window.location.href;
const pageMatch = currentUrl.match(/(\d+)\.html$/);
let currentPage = pageMatch ? parseInt(pageMatch[1]) : 1;
const totalPages = 8; 

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const curPage = window.location.pathname;
const pageLinks = document.querySelectorAll('footer ul li a');

pageLinks.forEach(link => {
    if (link.getAttribute('href').includes(curPage)) {
        link.classList.add('active');
    }
});

function updateButtons() {
  
    if (currentPage === 1) {
      prevBtn.classList.add('disabled');
    } else {
      prevBtn.classList.remove('disabled');
      prevBtn.href = `./${currentPage - 1}.html`;
      prevBtn.style.color = 'red';
    }

    if (currentPage === totalPages) {
        nextBtn.classList.add('disabled');
      } else {
        nextBtn.classList.remove('disabled');
        nextBtn.href = `./${currentPage + 1}.html`;
        nextBtn.style.color = 'red';
      }

}
   
window.onload = updateButtons;

