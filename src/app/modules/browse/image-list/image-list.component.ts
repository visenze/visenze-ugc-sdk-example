import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../../models/response.model';

@Component({
  selector: 'image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  @Input() images: [Image];
  @Input() campaignId: string;
  @Input() reqId: string;

  constructor() { }

  ngOnInit() {
  }

}
