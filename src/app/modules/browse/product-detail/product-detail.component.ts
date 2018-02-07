import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api-call.service';
import { ActivatedRoute } from '@angular/router';
import { Image } from '../../../models/response.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],

})
export class ProductDetailComponent implements OnInit {
  imName: string;
  campaignId: string;
  images: [Image];
  reqId: string;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.imName = params['imName'];
      this.campaignId = params['campaignId'];
    });
  }

  ngOnInit() {
    this.apiService.getImgByProduct(this.campaignId, this.imName).subscribe(
      data => {
        this.reqId = data['req_id'];
        const imName = data['im_name'];
        this.images = data['result'];
        (window as any).ugc_client.send({
          action: 'detail_page_enter',
          reqid: this.reqId,
          im_name: imName
        });
        console.log('detail_page_enter sent');
        console.log('log_id:' + this.reqId);
      },
      err => {
        console.log(err);
      }
    );
  }

}
