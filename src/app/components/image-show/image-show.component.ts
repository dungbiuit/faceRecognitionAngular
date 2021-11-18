import { Component, OnInit, Input } from '@angular/core';
import { IMAGE_GET } from '../image-detection/image-detection.component';
@Component({
  selector: 'app-image-show',
  templateUrl: './image-show.component.html',
  styleUrls: ['./image-show.component.css']
})
export class ImageShowComponent implements OnInit {
  IMAGE_SHOW : any = IMAGE_GET
  constructor() { }
  ngOnInit(): void {
    // console.log(this.IMAGE_SHOW)
  }


}
