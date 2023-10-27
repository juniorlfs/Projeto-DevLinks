function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a imagem
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode nova imagem
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayke Brito sorrindo, usando óculos escuros, jaqueta preta e fundo degradê do rosa para o azul"
    )
  } else {
    // se não manter a imagem original
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayke Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo"
    )
  }
}
