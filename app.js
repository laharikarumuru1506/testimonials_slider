const reviews=[
{
   id:1,
   author:"Tanya Sinclair",
   job:"UX Engineer",
   img:"images/image-tanya.jpg",
   info:"\"I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job pf my dreams and so exicted about the future.\""
},
{
  id:1,
   author:"John Tarkpor",
   job:"Junior Front-end Developer",
   img:"images/image-john.jpg",
   info:"\"If you want to lay the best foundation possible I'd reccommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.\""
}
];

const info=document.getElementById("info");
const author=document.getElementById("author");
const image=document.getElementById("image");

let currentItem=0;

const prevBtn=document.getElementById("prev-btn");
const nextBtn=document.getElementById("next-btn");

window.addEventListener("DOMContentLoaded",function(){
 showPerson();
});

prevBtn.addEventListener("click",function(){
  currentItem--;
  if(currentItem<0){
  	currentItem=reviews.length-1;
  }
  showPerson();
});

nextBtn.addEventListener("click",function(){
  currentItem++;
  if(currentItem>reviews.length-1){
  	currentItem=0;
  }
  showPerson();
});

function showPerson(){
	let item=reviews[currentItem];
    let about=`<h6 id="author">${item.author}<span class="text-muted mx-2" id="job">${item.job}</span></h6>`;
    author.innerHTML=about;
    info.textContent=item.info;
    image.src=item.img;
}