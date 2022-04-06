

let instaImg = document.querySelector('#insta__img')

let ItemList = document.querySelector('#instalist');

instaStory =[
    {
        id : 1,
        name: "bike", 
        imgUrl: ['../../images/mm.mp4','../../images/ll.mp4',],
        type: "videos"
    },
    {
        id : 2,
        name: "Father", 
        imgUrl:'../../images/dad.jpg',
        type: "img"
    },
    {
        id : 3,
        name: "bike", 
        imgUrl: ['../../images/vv.mp4','../../images/jj.mp4',],
        type: "videos"
    },
    {
        id : 4,
        name: "flower", 
        imgUrl:[ '../../images/nn.mp4', '../../images/jjj.mp4'],
        type: "videos"
    },
    {
        id : 5,
        name: "Father", 
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
    
            <div >
              <div class="insta__main-box ">
              <div style="position: absolute; top: 20px; left: 10px">
              </div>
                <div class="insta__btn-box" style="display: flex;">
                  <button class="insta__head-btn">
                    <i class='bx bx-pause'></i>
                  </button>
                  <button class="insta__head-btn">
                    <i class='bx bx-volume-mute'></i>
                  </button>
                  <button class="insta__head-btn">
                    <i class='bx bx-dots-horizontal-rounded'></i>
                  </button>
                </div>
              </div>
              <div class="box">
                <span class="child1"></span>
                <span class="child2"></span>
                <span class="child3"></span>
          </div>
          <div class=" input__box ">
                <input class="input__psce" type="text" placeholder="Reply to you ${item.name}">
                <button class="input__btn">
                  <i class='bx bxl-telegram'></i>
                </button>
            </div>
            </div>
            </div>
            
            `
            ItemList.appendChild(li)
        }
        else if (item.type=="videos") {
            li.innerHTML =`
            <div class="insta__img-box"> 
            <video src="${item.imgUrl[0]}" controls="autoplay" id="video"></video>
    
            <div >
              <div class="insta__main-box ">
              <div style="position: absolute; top: 20px; left: 10px">
              </div>
                <div class="insta__btn-box" style="display: flex;">
                  <button class="insta__head-btn">
                    <i class='bx bx-pause'></i>
                  </button>
                  <button class="insta__head-btn">
                    <i class='bx bx-volume-mute'></i>
                  </button>
                  <button class="insta__head-btn">
                    <i class='bx bx-dots-horizontal-rounded'></i>
                  </button>
                </div>
              </div>
              <div class="box">
                <span class="child1"></span>
                <span class="child2"></span>
                <span class="child3"></span>
          </div>
          <div class=" input__box ">
                <input class="input__psce" type="text" placeholder="Reply to you ${item.name}">
                <button class="input__btn">
                  <i class='bx bxl-telegram'></i>
                </button>
            </div>
            </div>
            </div>
            `
            ItemList.appendChild(li)
        }
  
    })

let input__box = document.querySelector('.input__box')
let mainBox = document.querySelector('.insta__main-box')
let insta__box = document.querySelector ('.insta__box')
let idx =0;
let box = document.querySelectorAll('.box span')
let instaList = document.querySelector('#instalist');
let instaItem = document.querySelectorAll('#instalist li');

let slide_btn = document.querySelector('.slide__btn')
let videoBtn = document.querySelector('.videobtn')
let instaBox = document.querySelector ('.insta__img-box');
let instaBoxItem = document.querySelector('.insta__img-box video')
let video = document.querySelector('.video')


a =0
instaItem[2].style.transform= `scale(1.5)`

instaItem[0].addEventListener('click', ()=> {


        instaItem[0].style.transform= `scale(1.5)`;
        instaItem[1].style.transform= `scale(1)`;
        instaItem[2].style.transform= `scale(1)`;
        instaItem[3].style.transform= `scale(1)`;
        instaItem[4].style.transform= `scale(1)`;
        instaItem[0].style.margin =`350px`
        instaList.style.transform=`translateX(570px)`
        instaItem[1].style.margin = `350px`;
        instaItem[2].style.margin = `350px`;
        instaItem[3].style.margin = `350px`;
        instaItem[4].style.margin = `350px`;
        input__box.classList.remove('d-none')
        slide_btn.classList.add('d-none');
        mainBox.classList.remove('d-none')
        a=1


})
instaItem[1].addEventListener('click', ()=> {
       
  
        if (a==1) {
          
        instaItem[0].style.transform= `scale(1)`;
        instaItem[1].style.transform= `scale(1.5)`;
        instaItem[2].style.transform= `scale(1)`;
        instaItem[3].style.transform= `scale(1)`;
        instaItem[4].style.transform= `scale(1)`;
        instaItem[1].style.margin =`350px`
        instaList.style.transform=`translateX(280px)`
        instaItem[2].style.margin = `350px`;
        instaItem[3].style.margin = `350px`;
        instaItem[4].style.margin = `350px`;
        input__box.classList.remove('d-none')
        slide_btn.classList.add('d-none');
        mainBox.classList.remove('d-none')
        }
        a=2

 


})
instaItem[2].addEventListener('click', ()=> {


    instaItem[0].style.transform= `scale(1)`;
    instaItem[1].style.transform= `scale(1)`;
    instaItem[2].style.transform= `scale(1.5)`;
    instaItem[3].style.transform= `scale(1)`;
    instaItem[4].style.transform= `scale(1)`;
    instaItem[2].style.margin =`350px`
    instaList.style.transform=`translateX(-10px)`
    instaItem[3].style.margin = `350px`;
    instaItem[4].style.margin = `350px`;
    slide_btn.classList.add('d-none')
})
instaItem[3].addEventListener('click', ()=> {



    instaItem[0].style.transform= `scale(1)`;
    instaItem[1].style.transform= `scale(1)`;
    instaItem[2].style.transform= `scale(1)`;
    instaItem[3].style.transform= `scale(1.5)`;
    instaItem[4].style.transform= `scale(1)`;
    instaItem[2].style.margin =`350px`
    instaList.style.transform=`translateX(-290px)`
    instaItem[3].style.margin = `350px`;
    instaItem[4].style.margin = `350px`;
})
instaItem[4].addEventListener('click', ()=> {

    instaItem[0].style.transform= `scale(1)`;
    instaItem[1].style.transform= `scale(1)`;
    instaItem[2].style.transform= `scale(1)`;
    instaItem[3].style.transform= `scale(1)`;
    instaItem[4].style.transform= `scale(1.5)`;
    instaItem[2].style.margin =`350px`
    instaList.style.transform=`translateX(-570px)`
    instaItem[3].style.margin = `350px`;
    instaItem[4].style.margin = `350px`;
})






let rightBtn = document.querySelector('.right');
let leftBtn = document.querySelector('.left');
let count = 0
let number = 0;
let count2 = instaStory.length

// let items = document.querySelectorAll('.insta__item');
// let counter = 0


// items[0].classList.add('active')


// rightBtn.addEventListener('click', () => {
//   if (count2 - 2 >= number) {
//     count += 300
//     instaList.style.transform = `translateX(-${count}px)`
//     number++
//   }

//   if (counter + 1 <=instaStory.length - 1) {
//       counter++
//   }

//   items.forEach((item, idx) => {
//     if (counter == idx) {
//       item.classList.add('active')
//     } else {
//       item.classList.remove('active')
//     }
//   })
// })



// leftBtn.addEventListener("click", () => {
//   if (number > 0) {
//     count -= 300
//     instaList.style.transform = `translateX(-${count}px)`
//     number--
//   }

//   if (counter > 0) {
//     counter--
//   }

//   items.forEach((item, idx) => {
//     if (counter == idx && counter >= 0) {
     
//       item.classList.add('active')
//     } else {
//       item.classList.remove('active')
//     }
//   })
// })







let index = 0;

function changeImg() {
    if (index > instaItem.length - 1) {
        index = 0
    } else if (index < 0 && instaItem.length==2) {
        index = instaItem.length - 1
        instaItem[index].style.transform= `scale(1.6)`;
    }

    instaList.style.transform = `translateX(${-index * 250}px)`
}

rightBtn.addEventListener('click', function change() {
    index++;
    // resetInter();
    changeImg()
})
leftBtn.addEventListener('click', function change() {
    index--;
    // resetInter();
    changeImg()
})
// let interval = setInterval (run, 3000);

// function run () {
//     index++;
//     changeImg();
// }

// function resetInter () {
//     clearInterval(interval);
//     interval = setInterval(run, 3000);
// }



