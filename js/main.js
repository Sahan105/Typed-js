let typetext = document.querySelector(".typetxt")
let endtext = typetext.innerHTML
let stratext = 0;
console.log(endtext.length)
typetext.innerHTML = ""
function type() {
    typetext.innerHTML += endtext.charAt(stratext)
    stratext++
    if (stratext == endtext.length) {

        stratext = 0
        typetext.innerHTML = ""


    }

}
let stop = setInterval(() => {
    type()

}, 1000)
