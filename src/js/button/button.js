const buttonMenu = document.getElementById('button__menu__id')
const exampleToast = document.getElementById('exampleToast')

buttonMenu.addEventListener('click', e => {
  const appearToast = new bootstrap.Toast(exampleToast)
  appearToast.show()
})