function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a imagem
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode nova imagem
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se não manter a imagem original
    img.setAttribute("src", "./assets/avatar.png")
  }
}
