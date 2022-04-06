// index =0

// function autoChange() {
//     changeImg();
//     index++
// }



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
let insta__logo = document.querySelector('.insta__logo')
let items__btn = document.querySelector('.items__btn')
let removeBtn = document.querySelector('.removebtn')

removeBtn.addEventListener('click', removeContiner)
function removeContiner() {
    insta__box.style.display=`none`
    removeBtn.style.display =`none`
    items__btn.style.display =`none`
    insta__logo.style.display =`none`
}