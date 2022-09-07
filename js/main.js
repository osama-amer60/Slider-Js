var imgList = Array.from(document.querySelectorAll(".item img"));  //nodeList

var lightBoxContainer = document.getElementById("lightBoxContainer")
var lightBoxItem = document.getElementById("lightBoxItem")
var closeBtn = document.getElementById("close")
var prevBtn = document.getElementById("leftBtn")
var nextBtn = document.getElementById("rightBtn")
var currentSlide;



for(var i = 0;i < imgList.length;i++){
    imgList[i].addEventListener("click", function(e){
        var imgSrc = e.target.getAttribute("src")
        currentSlide = imgList.indexOf(e.target)
       lightBoxItem.style.backgroundImage = `url(${imgSrc})`
       lightBoxContainer.style.display = "flex" 

    })
}

//.........................................................
//next and prevuios function
function slide(i){
    currentSlide += i;
    if(currentSlide == imgList.length){currentSlide = 0 }
    if(currentSlide < 0 ){currentSlide = imgList.length -1}
    // console.log(currentSlide)
    var imgSrc = imgList[currentSlide].src
    // console.log(imgSrc)
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}
nextBtn.addEventListener("click", function(){
    slide(1)
})
prevBtn.addEventListener("click", function(){
    slide(-1)
})


//...............................................
// close slider function
function closeSlider(){
    lightBoxContainer.style.display = "none" 
}
closeBtn.addEventListener("click",function(){
    closeSlider()
})


//.............................................................
//use keys event in the slider
document.addEventListener("keydown",function(e){
    console.log(e)

    if(e.code == "ArrowRight"){
        slide(1)
    }else if(e.code == "ArrowLeft"){
        slide(-1)
    }else if(e.code =="Escape"){
        closeSlider()
    }
})





