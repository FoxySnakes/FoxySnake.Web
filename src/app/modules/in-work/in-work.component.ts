import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-in-work',
  templateUrl: './in-work.component.html',
  styleUrls: ['./in-work.component.css']
})
export class InWorkComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle("Page en construction")
  }
}
