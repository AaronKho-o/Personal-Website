getStarted()
setupBlogs()

function getStarted() {
  hidePages('About')

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

function hidePages(pageNotToHide) {
    document.querySelectorAll('li a').forEach((item, idx) => {
      if (item.innerHTML != pageNotToHide) {
        document.querySelector(`#${item.innerHTML}`).style.display = 'none'
      }
    })
  }

function navigateBar(page) {
  hidePages(page)
  document.querySelector(`#${page}`).style.display = 'flex'
}

function setupBlogs() {
  hideBlogs()
  unBoldTitle()

  function hideBlogs() {
    document.querySelectorAll('.blogBody').forEach((blog, idx) => {
      blog.style.display = 'none'
    })
  }


  function unBoldTitle() {
    document.querySelectorAll('.blogTitle').forEach((title, idx) => {
      title.style.fontWeight = 'normal'
      title.addEventListener('click', (e) => {
        document.querySelectorAll('.blogBody').forEach((blog, idx) => {
          if (blog.id === `blogBody${e.target.id.charAt(e.target.id.length - 1)}`) {
            blog.style.display = 'flex'
            e.target.style.display = 'flex'
            e.target.style.fontWeight = 'bold'
            e.target.style.fontStyle = 'normal'
            e.target.style.background = 'transparent'
            e.target.style.borderStyle = 'hidden'
            e.target.style.padding = '0 0 0 0'
            e.target.style.marginBottom = '0'
          } else {
            blog.style.display = 'none'
            document.querySelector(`#blogTitle${blog.id.charAt(blog.id.length - 1)}`).style.display = 'none'
          }

        })
      })

      title.addEventListener('mouseover', (e) => {
        e.target.style.color = 'darkgreen'
      })

      title.addEventListener('mouseout', (e) => {
        e.target.style.textDecoration = 'none'
        e.target.style.color = 'black'
      })
    })
  }

  document.querySelector('#allBlogs').addEventListener('click', (e) => {
    document.querySelectorAll('.blogBody').forEach((blog, idx) => {
      blog.style.display = 'none'
    })

    document.querySelectorAll('.blogTitle').forEach((title, idx) => {
      title.style.display = 'flex'
      title.style.fontWeight = 'normal'
      title.style.background = '#FFFDD0';
      title.style.borderStyle = 'solid';
      title.style.padding =  '30px 30px 30px 30px';
      title.style.marginBottom = '20px'
    })
  })

}
