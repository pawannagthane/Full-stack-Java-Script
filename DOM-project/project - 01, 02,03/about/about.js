let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

let s = document.createElement('div')
s.className = ('accordian')
document.querySelector('.accordian-wrapper').appendChild(s);

let h3 = document.createElement('h3')
h3.textContent = 'Skills';
s.appendChild(h3);

let pi = document.createElement('p')
 pi.textContent = 'I posses av very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.'
s.appendChild(pi)

s.addEventListener("click" , ()=>{
  if (pi.style.display === "block") {
    pi.style.display = "none";
  } else {
    pi.style.display = "block";
  }
})