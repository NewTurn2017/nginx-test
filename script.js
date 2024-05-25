let widget = document.getElementById('widget')
let header = document.getElementById('widget-header')

header.onmousedown = function (event) {
  let shiftX = event.clientX - widget.getBoundingClientRect().left
  let shiftY = event.clientY - widget.getBoundingClientRect().top

  function moveAt(pageX, pageY) {
    widget.style.left = pageX - shiftX + 'px'
    widget.style.top = pageY - shiftY + 'px'
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY)
  }

  document.addEventListener('mousemove', onMouseMove)

  header.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove)
    header.onmouseup = null
  }
}

header.ondragstart = function () {
  return false
}

document.getElementById('widget-button').addEventListener('click', function () {
  alert('Button clicked!')
})
