function toggleMode (){
  const html = document.documentElement
  html.classList.toggle('light')

  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  // }
  // else {
  //   html.classList.add('light')
  // }

  const img = document.querySelector("#profile img")

  //substitui alguns elementos da pagina
  if (html.classList.contains('light')){
    img.setAttribute('src', './assets/happy_guitar.png')
  }
  else {
    img.setAttribute('src', './assets/me_dev.jpg')
  }
  
}