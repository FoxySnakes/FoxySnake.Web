import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy{
  constructor(private titleService: Title) {
    this.titleService.setTitle("Contact")
  }


  ngOnInit(): void {
    var contactAHtml = document.getElementById('contact')
    if (contactAHtml) {
      contactAHtml.className += ' active'
    }
  }
  ngOnDestroy(): void {
    var contactAHtml = document.getElementById('contact')
    if (contactAHtml) {
      contactAHtml.className = 'category-name'
    }
  }
}
