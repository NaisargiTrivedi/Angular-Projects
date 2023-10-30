import { Component } from '@angular/core';

@Component({
  selector: 'app-post-two-way-data-binding',
  templateUrl: './post-two-way-data-binding.component.html',
  styleUrls: ['./post-two-way-data-binding.component.css']
})
export class PostTwoWayDataBindingComponent {
  title: string;
  description: string;
  imgUrl: string;
  siteUrl: string;
  addBgColor: boolean;
}
