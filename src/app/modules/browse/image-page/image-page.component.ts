import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api-call.service';
import { CampaignImgResponse } from '../../../models/response.model';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.css']
})
export class ImagePageComponent implements OnInit {

  images: object;
  campaignId: string;
  reqId: string;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.getImg();
  }
  getImg() {
    this.apiService.getCampImg().subscribe(
      (response: CampaignImgResponse) => {
        this.images = response.result;
        this.campaignId = response.campaign_id;
        this.reqId = response.req_id;
        // Call tracking api
        (window as any).ugc_client.send({
          action: 'campaign_page_enter',
          reqid: this.reqId
        });
        console.log('campaign_page_enter sent');
        console.log('log_id:' + this.reqId);
      },
      err => {
        console.log(err);
      }
    );
  }

}
