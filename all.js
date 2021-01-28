//ajax
const xhr = new XMLHttpRequest();
const url = 'https://api.github.com/repos/whalefine/parallax_scroll_demo';

//顯示api資料
const title = document.getElementById('title');
const repo_description = document.getElementById('repo_description');
const repo_url = document.getElementById('repo_url');
const repo_name = document.getElementById('repo_name');
const item = document.querySelectorAll('.item');

//parallax scroll
const sky = document.querySelector('.sky');
const mountain = document.querySelector('.mountain');
const moon = document.querySelector('.moon');


xhr.open('get',url);
xhr.send(null);
xhr.onreadystatechange = function(){
  // console.log(xhr.status);
  if(xhr.readyState === 4 && xhr.status === 200){
    const data = JSON.parse(xhr.responseText);
    // console.log(data);
    sendData(data);
  }
}

window.addEventListener('scroll',function(){
  let value = window.pageYOffset;
  // console.log(value);
  sky.style.transform = `translateY(${value * 0.5}px)`;
  mountain.style.transform = `translateY(${value * 0.15}px)`;
  moon.style.transform = `translate(${value * 0.5}px,${value * 1}px)`;
  title.style.transform = `translateY(${value * 0.8}px)`;
  console.log(window.scrollY);
  if(value <= 100){
    giveClass('item');
  }
  else if(value > 250){
    giveClass('item active');
  }
  // console.log(item[0].getAttribute('class')==='item active');
});

function sendData(data){
  title.textContent = data.name;
  repo_description.textContent = data.description;
  repo_url.innerHTML = `<a href="${data.svn_url}">專案網址</a>`;
  repo_name.textContent = data.name;
}
function giveClass(text){
  item.forEach(item => {
    item.setAttribute('class',text);
  });
}