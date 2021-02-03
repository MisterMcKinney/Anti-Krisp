function update() {
    if(location.toString().includes("#products")) {
        document.getElementById("about").style.display = 'none'
        document.getElementById("products").style.display = 'block'
        document.getElementById("home").style.display = 'none'
    } else if(location.toString().includes("#about")) {
        document.getElementById("about").style.display = 'block'
        document.getElementById("products").style.display = 'none'
        document.getElementById("home").style.display = 'none'
    } else {
        document.getElementById("about").style.display = 'none'
        document.getElementById("products").style.display = 'none'
        document.getElementById("home").style.display = 'block'
    }
}