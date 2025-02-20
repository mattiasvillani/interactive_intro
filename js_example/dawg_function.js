function dog(dogsize) {
    var pic;
    if (dogsize == 'big') {
      pic = "./figs/bigdog.png"
    } else {
      pic = "./figs/smalldog.png"
    }
    document.getElementById('dogpic').src = pic;
}