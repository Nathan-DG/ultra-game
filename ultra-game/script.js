const link = location.pathname
if (link == '/') {
  document.getElementById('play').addEventListener('click', () => {
    location.href = '/home.html'
  })
}