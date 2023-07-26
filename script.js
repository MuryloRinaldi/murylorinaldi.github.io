function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag image , depois subtituir a imagem
  const img = document.querySelector("#profile img")

  //substituir a img

  if (html.classList.contains("light")) {
    //se tiver light-mode , adicionar light
    img.setAttribute('src','./assets/avatar-light.png')
  } else {
    //se tiver sem light mode , adicionar a normal
    img.setAttribute('src', './assets/avatar.png')
  }
}
