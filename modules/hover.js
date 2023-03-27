function setActiveLink() {
    const links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i += 1) {
      links[i].classList.remove('active');
    }
    this.classList.add('active');
  }
  
  const links = document.getElementsByTagName('a');
  for (let i = 0; i < links.length; i += 1) {
    links[i].addEventListener('mouseover', setActiveLink);
  }
  
  