let customScroll =document.querySelector(".scroll")

window.addEventListener("scroll" , function () {
    

    let scrolTop = this.window.scrollY.toFixed(0)

    let documentHeigth =this.document.body.clientHeight

    let windowHeight = this.window.innerHeight

    let scrollPersent = scrolTop / (documentHeigth - windowHeight)

    let scrollPersentRounder = Math.round(scrollPersent *100)

    customScroll.style.width =scrollPersentRounder + "%"

})