var images4 = [
    "./Components/animation sequence/0001.png",
    "./Components/animation sequence/0002.png",
    "./Components/animation sequence/0003.png",
    "./Components/animation sequence/0004.png",
    "./Components/animation sequence/0005.png",
    "./Components/animation sequence/0006.png",
    "./Components/animation sequence/0007.png",
    "./Components/animation sequence/0008.png",
    "./Components/animation sequence/0009.png",
    "./Components/animation sequence/0010.png",
    "./Components/animation sequence/0011.png",
    "./Components/animation sequence/0012.png",
    "./Components/animation sequence/0013.png",
    "./Components/animation sequence/0014.png",
    "./Components/animation sequence/0015.png",
    "./Components/animation sequence/0016.png",
    "./Components/animation sequence/0017.png",
    "./Components/animation sequence/0018.png",
    "./Components/animation sequence/0019.png",
    "./Components/animation sequence/0020.png",
    "./Components/animation sequence/0021.png",
    "./Components/animation sequence/0022.png",
    "./Components/animation sequence/0023.png",
    "./Components/animation sequence/0024.png",
];

var imageCache4 = [];
var obj4 = null;
var tween4 = null;
var controller4 = null;
var scene4 = null;

preloadImages(images4, imageCache4, loaded4);

function loaded4(){
    sequence4(images4);
}

function sequence4(imageCache){
    obj4 = {curImg: 0};

    tween4 = TweenMax.to(obj4, 0.75, {
        curImg: imageCache.length - 1,
        roundProps: "curImg",				
        repeat: -1,
        yoyo: true,								
        immediateRender: true,			
        ease: Linear.easeIn,
        onUpdate: function () {
            $("#butterfly").attr("src", imageCache[obj4.curImg]);
        }
    });

    controller4 = new ScrollMagic.Controller();

    scene4 = new ScrollMagic.Scene({
         triggerElement: "#trigger4", 
         duration: 1800
    })

    .setTween(tween4)
    .addTo(controller4);
}