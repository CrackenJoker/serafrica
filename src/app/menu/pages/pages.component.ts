import { Component } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
