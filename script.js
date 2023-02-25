const dinazor = document.getElementById("dinazor")
const kaktüs = document.getElementById("kaktüs")

function jump (){
    if (dinazor.classList != "jump"){
        dinazor.classList.add("jump");

        setTimeout(function () {
            dinazor.classList.remove("jump")
        }, 300)
    }
}

var isAvlive = setInterval(function() {
    var dinazortop = parseInt(window.getComputedStyle(dinazor).getPropertyValue("top"))

    var kaktusleft = parseInt(window.getComputedStyle(kaktüs).getPropertyValue("left"));

    if (kaktusleft < 50 && kaktusleft >0 && dinazortop >= 140 ) {
        alert("Oyun Bitti")
    }
}, 10)

document.addEventListener("keydown", function(event){
    jump();
})