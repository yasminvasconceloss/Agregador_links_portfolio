function changeMode() {
  const html = document.documentElement

    if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  //tag image
  const img = document.querySelector("#profile img")
    
  //subst a img
    if (html.classList.contains("light")) {
     // se tiver light mode adicionar a img light
     img.setAttribute('src', './assets/avatar-light.png' )
  } else {
      // se tiver sem light mode, manter a img normal
     img.setAttribute("src", "./assets/avatar.png")
  }




  /*
  //tag alt 
  const alt = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    alt.setAttribute("alt", "Imagem modo claro")
  } else {
    alt.setAttribute("alt", "Imagem modo escuro")
  }
*/


}