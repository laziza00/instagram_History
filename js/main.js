

let instaImg = document.querySelector('#insta__img')

let ItemList = document.querySelector('#instalist');

instaStory =[
    {
        id : 1,
        imgUrl: ['../../images/mm.mp4','../../images/ll.mp4',],
        type: "video"
    },
    {
        id : 2,
        imgUrl:'../../images/dad.jpg',
        type: "img"
    },
    {
        id : 3,
        imgUrl: ['../../images/vv.mp4','../../images/jj.mp4',],
        type: "video"
    },
    {
        id : 4,
        imgUrl:[ '../../images/nn.mp4', '../../images/jjj.mp4'],
        type: "video"
    },
    {
        id : 5,
        imgUrl: '../../images/dd2.jpg',
        type: "img"
    },
]


    instaStory.forEach((item) => {

        let li = document.createElement('li');
        li.className = "insta__item";

        if(item.type=="img") {
            li.innerHTML =`
            <div class="insta__img-box"> 
              <img id="insta__img" src="${item.imgUrl}" alt="img">
              <button class="slide_btn mediabtn">
              <i class='bx bx-moon'></i>
              </button>
              <div class="box">
              <span class="child1"></span>
              <span class="child2"></span>
              <span class="child3"></span>
            </div>
            <div class="insta__input input__box">
            <input class="input__psce" type="text" placeholder="Reply to you">
            <button class="input__btn">
              <i class='bx bxl-telegram'></i></button>
          </div>

              </div>
            
            `
            ItemList.appendChild(li)
        }
        else if (item.type=="video") {
            li.innerHTML =`
            <div class="insta__img-box"> 
            <video   src="${item.imgUrl[0]}"  controls="autoplay">
            <video   src="${item.imgUrl[1]}"  controls="autoplay">
            <video   src="${item.imgUrl[2]}"  controls="autoplay">
            <video   src="${item.imgUrl[0]}"  
            controls="autoplay">
            </video>
            <video   src="${item.imgUrl[1]}"  controls="autoplay">

            <button class="slide_btn videobtn" >
            <i class='bx bx-moon'></i>
            </button>
            <div class="box">
            <span class="child1"></span>
            <span class="child2"></span>
            <span class="child3"></span>
          </div>
          <div class="insta__input input__box">
          <input class="input__psce" type="text" placeholder="Reply to you">
          <button class="input__btn">
            <i class='bx bxl-telegram'></i></button>
        </div>


            </div>
         
            `
            ItemList.appendChild(li)
        }
  
    
    })


let idx =0;
let box = document.querySelectorAll('.box span')
let instaList = document.querySelector('#instalist');
let instaItem = document.querySelectorAll('#instalist li');
let rightBtn = document.querySelector('.right');
let leftBtn = document.querySelector('.left');
let slide_btn = document.querySelector('.slide_btn')
let mediaBtn = document.querySelector('.mediabtn');
let videoBtn = document.querySelector('.videobtn')



instaItem[0].addEventListener('click', ()=> {
    mediaBtn.style.display =`none`
    videoBtn.style.display =`block`
    slide_btn.style.display =`block`
    instaItem[0].classList.add= `active`;
    instaItem[4].classList.remove= `active`;
    instaItem[1].classList.remove= `active`;
    instaItem[2].classList.remove= `active`;
    instaItem[3].classList.remove= `active`;

    instaItem[0].style.transform= `scale(1.6)`;
    instaItem[1].style.transform= `scale(1)`;
    instaItem[2].style.transform= `scale(1)`;
    instaItem[3].style.transform= `scale(1)`;
    instaItem[4].style.transform= `scale(1)`;
    instaItem[0].style.margin =`130px`
    instaList.style.transform=`translateX(430px)`
    instaItem[1].style.margin = `130px`;
    instaItem[2].style.margin = `130px`;
    instaItem[3].style.margin = `130px`;
    instaItem[4].style.margin = `130px`;
})
instaItem[1].addEventListener('click', ()=> {
    mediaBtn.style.display =`none`
    videoBtn.style.display =`block`
    slide_btn.style.display =`block`
    instaItem[1].classList.add= `active`;
    instaItem[0].classList.remove= `active`;
    instaItem[4].classList.remove= `active`;
    instaItem[2].classList.remove= `active`;
    instaItem[3].classList.remove= `active`;

    instaItem[0].style.transform= `scale(1)`;
    instaItem[1].style.transform= `scale(1.6)`;
    instaItem[2].style.transform= `scale(1)`;
    instaItem[3].style.transform= `scale(1)`;
    instaItem[4].style.transform= `scale(1)`;
    instaItem[1].style.margin =`130px`
    instaList.style.transform=`translateX(210px)`
    instaItem[2].style.margin = `130px`;
    instaItem[3].style.margin = `130px`;
    instaItem[4].style.margin = `130px`;
})
instaItem[2].addEventListener('click', ()=> {

    mediaBtn.style.display =`none`
    videoBtn.style.display =`block`
    slide_btn.style.display =`block`
    instaItem[2].classList.add= `active`;
    instaItem[0].classList.remove= `active`;
    instaItem[1].classList.remove= `active`;
    instaItem[4].classList.remove= `active`;
    instaItem[3].classList.remove= `active`;

    instaItem[0].style.transform= `scale(1)`;
    instaItem[1].style.transform= `scale(1)`;
    instaItem[2].style.transform= `scale(1.6)`;
    instaItem[3].style.transform= `scale(1)`;
    instaItem[4].style.transform= `scale(1)`;
    instaItem[2].style.margin =`130px`
    instaList.style.transform=`translateX(-10px)`
    instaItem[3].style.margin = `130px`;
    instaItem[4].style.margin = `130px`;
    slide_btn.style.display =`none`
})
instaItem[3].addEventListener('click', ()=> {
    mediaBtn.style.display =`none`
    videoBtn.style.display =`block`
    slide_btn.style.display =`block`
    instaItem[3].classList.add= `active`;
    instaItem[0].classList.remove= `active`;
    instaItem[1].classList.remove= `active`;
    instaItem[2].classList.remove= `active`;
    instaItem[4].classList.remove= `active`;

    instaItem[0].style.transform= `scale(1)`;
    instaItem[1].style.transform= `scale(1)`;
    instaItem[2].style.transform= `scale(1)`;
    instaItem[3].style.transform= `scale(1.6)`;
    instaItem[4].style.transform= `scale(1)`;
    instaItem[2].style.margin =`130px`
    instaList.style.transform=`translateX(-230px)`
    instaItem[3].style.margin = `130px`;
    instaItem[4].style.margin = `130px`;
})
instaItem[4].addEventListener('click', ()=> {
    mediaBtn.style.display =`none`
    videoBtn.style.display =`block`
    slide_btn.style.display =`block`
    instaItem[4].classList.add= `active`;
    instaItem[0].classList.remove= `active`;
    instaItem[1].classList.remove= `active`;
    instaItem[2].classList.remove= `active`;
    instaItem[3].classList.remove= `active`;

    instaItem[0].style.transform= `scale(1)`;
    instaItem[1].style.transform= `scale(1)`;
    instaItem[2].style.transform= `scale(1)`;
    instaItem[3].style.transform= `scale(1)`;
    instaItem[4].style.transform= `scale(1.6)`;
    instaItem[2].style.margin =`130px`
    instaList.style.transform=`translateX(-450px)`
    instaItem[3].style.margin = `130px`;
    instaItem[4].style.margin = `130px`;
})


// index =0

function autoChange() {
    changeImg();
    index++
}

let instaBox = document.querySelector ('.insta__img-box');
let instaBoxItem = document.querySelector('.insta__img-box video')





// sliderim o'xshamadi


// function changeImg() {
//     if(instaItem[0].classList.contains("active")) {

//         if(index > instaBoxItem.length-1) {
//             index =0;
//         }
//         else if (index<0) {
//             index = instaBoxItem.length-1;
//         }
//         instaBox[0].style.transform= `translateX(${-index *370}px)`
//     }

     
//     if (instaItem[1].classList.contains("active")) {
//         if (index > instaBoxItem.length - 1) {
//           index = 0;
//         } else if (index < 0) {
//           index = instaBoxItem.length - 1;
//         }
//         instaBox[1].style.transform = `translateX(${-index * 350}px )`;
//       }
    
//       if (instaItem[2].classList.contains("active")) {
//         if (index > instaBoxItem.length - 1) {
//           index = 0;
//         } else if (index < 0) {
//           index = instaBoxItem.length - 1;
//         }
//         instaBox[2].style.transform = `translateX(${-index * 350}px )`;
//       }
    
//       if (instaItem[3].classList.contains("active")) {
//         if (index > instaBoxItem.length - 1) {
//           index = 0;
//         } else if (index < 0) {
//           index = instaBoxItem.length - 1;
//         }
//         instaBox[3].style.transform = `translateX(${-index * 350}px )`;
//       }
    
//       if (instaItem[4].classList.contains("active")) {
//         if (index > instaBoxItem.length - 1) {
//           index = 0;
//         } else if (index < 0) {
//           index = instaBoxItem.length - 1;
//         }
//         instaBox[4].style.transform = `translateX(${-index * 350}px )`;
//       }
    
// }







// sliderim o'xshamadi


let index = 0;

function changeImg() {
    if (index > instaItem.length - 1) {
        index = 0
    } else if (index < 0) {
        index = instaItem.length - 1
    }
    instaList.style.transform = `translateX(${-index * 180}px)`
}

rightBtn.addEventListener('click', function change() {
    index++;
    changeImg()
})
leftBtn.addEventListener('click', function change() {
    index--;

    changeImg()
})





