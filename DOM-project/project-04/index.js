
document.querySelectorAll('.clash-card__unit-stats').forEach((ele , i)=>{
let color = ['#FF9918' , '#FF3391' , '#bd7c2f' , '#33CC33' , '#3399FF']
    ele.style.backgroundColor = color[i % color.length];
    ele.style.color = '#f1f1f1'
});

document.querySelectorAll('.one-third').forEach((ele)=>{
        ele.style.color = '#f1f1f1'
});
document.querySelector('.archer div:nth-child(3)').textContent = 'The Archer';
document.querySelector('.goblin div:nth-child(3)').textContent = 'The Goblin';