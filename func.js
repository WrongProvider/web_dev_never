function toggleMode (){
  const html = document.documentElement
  html.classList.toggle('light')

  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  // }
  // else {
  //   html.classList.add('light')
  // }

  const img = document.querySelector('#profile img')

  //substitui a foto de profile da pagina
  if (html.classList.contains('light')){
    img.setAttribute('src', './assets/happy_guitar.png')
  }
  else {
    img.setAttribute('src', './assets/me_dev_format.png')
  }
  
  const listas = document.querySelector('ul li a')

  if (html.classList.contains('light')){
    listas.innerHTML = '"Música é a maior forma de expressão metafísica do ser humano"'
    listas.setAttribute('href','https://www.instagram.com/p/Cy4GqyRrXxj/?img_index=1')
  }
  else{
    listas.setAttribute('href','https://tryhackme.com/p/liquidsmoke')
  }
}