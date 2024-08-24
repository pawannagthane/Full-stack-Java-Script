// to create element in tags-container

let a = document.createElement('a');
a.textContent = 'Chinese(7)';
a.href ='#';
document.querySelector('.tags-container div').appendChild(a);

// to colour the text in all cards

document.querySelectorAll('.recipe-text').forEach((element)=>{
    element.style.color = "#0000ff";
})

// to create a button for pro-subscription 

let btn = document.createElement('a')
btn.className = ('btn')
btn.href="index.html"
btn.textContent = 'Pro Subscription'
document.querySelector('.nav-center div:last-child').appendChild(btn)

// to create a card 

let card = document.createElement('div')
card.className = ('card')
document.querySelector('.recipe-gallery').appendChild(card)

// add anchor tag inside card 

let ab = document.createElement('a')
ab.className = ("recipe-text")
ab.style.color = '#0000ff'
ab.href = '#'
card.appendChild(ab)

// add image tag inside card 

let img = document.createElement('img')
img.className = 'recipe-img'
img.setAttribute('src' , '../project-05/img/recipe-1.jpeg')
ab.appendChild(img)

// add text node in card 

let h5 = document.createElement('h5')
 h5.className = ("recipe-name")
 h5.textContent = 'hello'
 ab.appendChild(h5)

//  add p element in card

let para = document.createElement('p')
para.className = ("recipe-disp")
para.textContent = 'Prep : 20min | Cook : 45min'
ab.appendChild(para)



