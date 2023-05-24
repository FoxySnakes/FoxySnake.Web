import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  category = document.getElementsByName('category')
  categoryLink = document.getElementsByName('category-link');
  categoryLabel = document.getElementsByName('category-label');

  navbarCheck = document.getElementsByName('navbarcheck')
  navbar = document.getElementsByName('navbar')
  heightWindowWidth = ""

  constructor() {
    if (window.innerWidth >= 1024) {
      this.heightWindowWidth = "var(--nav-height)"
    }
    else {
      this.heightWindowWidth = "40px"
    }

  }
  ngOnInit(): void {
    document.getElementsByClassName('content-container')[0].addEventListener('click', () => {
      if (this.navbar[0].style.left == "0px") {
        this.closeNavBar()
      }
    })
    for (let i = 0; i < document.getElementsByTagName('a').length; i++) {
      document.getElementsByTagName('a')[i].addEventListener('click', () => {
        if (this.navbar[0].style.left == "0px") {
          this.closeNavBar()
        }
        if (window.innerWidth >= 1024) {
          this.closeNavBarLinks()
        }
      })
    }
  }

  //Dropdown
  dropDown(e: any, index: number) {
    if (e.currentTarget.className.match('toggle')) {
      e.currentTarget.style.height = this.heightWindowWidth;
      this.categoryLabel[index - 1].removeAttribute('class')
      setTimeout(() => this.categoryLink[index - 1].style.display = "none", 500);
      e.currentTarget.className = e.currentTarget.className.replace('toggle', '')
    }
    else {
      var i = 0
      this.categoryLink.forEach(item => {
        if (i != index - 1) {
          this.category[i].style.height = this.heightWindowWidth
          this.categoryLabel[i].removeAttribute('class')
          setTimeout(() => item.style.display = "none", 500)
          this.category[i].className = this.category[i].className.replace('toggle', '')
        }
        i++
      })
      this.categoryLink[index - 1].style.display = "block"
      this.categoryLabel[index - 1].className = "active"
      e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
      e.currentTarget.className += " toggle"
    }
  }

  //NavBar
  onCheckboxChange(e: any) {
    if (e.currentTarget.className.match('toggle')) {
      this.closeNavBar()
    }
    else {
      if (this.navbar) {
        this.navbar[0].style.left = "0"
      }
      document.getElementsByClassName('content-container')[0].className += " opaciting"
      document.getElementsByClassName('content-container')[0].setAttribute('style', 'margin-top: var(--nav-height)')
      document.getElementsByTagName('app-footer')[0].className = 'opaciting';
      document.getElementsByTagName('nav')[0].style.position = "fixed"
      e.currentTarget.className += " toggle"
    }
  }

  closeNavBar() {
    if (this.navbar) {
      this.navbar[0].style.left = "-100%"
    }
    document.getElementsByClassName('content-container')[0].className = "content-container"
    document.getElementsByClassName('content-container')[0].removeAttribute('style')
    document.getElementsByTagName('app-footer')[0].attributes.removeNamedItem('class');
    document.getElementsByTagName('nav')[0].style.position = "relative"
    this.navbarCheck[0].className = this.navbarCheck[0].className.replace('toggle', '')
  
  }
  closeNavBarLinks() {
    var i = 0
    this.categoryLink.forEach(item => {
      this.category[i].style.height = this.heightWindowWidth
      this.categoryLabel[i].removeAttribute('class')
      setTimeout(() => item.style.display = "none", 500)
      this.category[i].className = this.category[i].className.replace('toggle', '')
      i++
    })
  }
}
