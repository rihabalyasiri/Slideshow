var img = document.getElementById('img')
let btnRight = document.getElementById('btnRight')
let btnLeft = document.getElementById('btnLeft')

var i = 1;

btnRight.addEventListener('click', function () {
    i++;
    if (i == 10) {
        i = 9;
    }
    img.src = `img/img${i}.jpeg`


    console.log("from right " + i)
})
btnLeft.addEventListener('click', function () {
    i--;
    if (i == 0) {
        i = 1
    }
    img.src = `img/img${i}.jpeg`


    console.log("from left " + i)
})

// document.body.addEventListener('keydown', function(e) {
//     console.log(e)
//     if(e.code == "ArrowRight") {
//         console.log("right")
//         img.src = `img/img${i}.jpeg`
//         i++;
//         if(i == 5) {
//             i=4;
//         }
//     }else if(e.code == "ArrowLeft") {
//         console.log("left")
//         img.src = `img/img${i}.jpeg`
//         i--;
//         if(i == 0) {
//             i=1
//         }
//     }
// })
