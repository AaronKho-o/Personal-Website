getStarted()


function getStarted() {
    hidePages('About')

  function hidePages(pageNotToHide) {
    document.querySelectorAll('li a').forEach((item, idx) => {
      if (item.innerHTML != pageNotToHide) {
        document.querySelector(`#${item.innerHTML}`).style.display = 'none'
      }
    })
  }


  document.querySelectorAll('tr').forEach((row, idx) => {
    row.addEventListener('click', (e) => {
      document.querySelectorAll('tr').forEach((row, idx) => {
        row.className = ""
      })
      e.target.parentElement.className = "active-row"
    })
  })


  document.querySelectorAll('li a').forEach((item, idx) => {
    item.addEventListener('click', (e) => {
      document.querySelector('.nav-link.active').className = "nav-link"
      e.target.className = "nav-link active"
      hidePages(`${e.target.innerHTML}`)
      document.querySelector(`#${e.target.innerHTML}`).style.display = 'flex'
    })
  })
}
