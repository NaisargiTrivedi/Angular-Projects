import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  title: string = "";
  description: string = "";
  imgUrl: string = "";
  siteUrl: string = "";
  blockDisplay: boolean = true;
  addBgColor: boolean = false;

  setTitle = (title: string) => {
    this.title = title;
  }

  setDesc = (description: string) => {
    this.description = description;
  }

  setImgUrl = (imgUrl: string) => {
    this.imgUrl = imgUrl;
    this.blockDisplay = false;
  }

  setSiteUrl = (siteUrl: string) => {
    this.siteUrl = siteUrl;
  }

  addBg = (check: any) => {
    let isChecked = check.currentTarget.checked;
    isChecked == true ? this.addBgColor = true : this.addBgColor = false;
  }
}
