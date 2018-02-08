import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';
import { EventEmitter } from '@angular/core/src/event_emitter';
import { ApiService } from '../../../service/api-call.service';
import { Image, Product } from '../../../models/response.model';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css'],
  providers: [ApiService]
})
export class ImageCardComponent implements OnInit {
  @Input() imageObject: Image;
  @Input() campaignId: string;
  @Input() reqId: string;
  products: [Product];
  modalRef: BsModalRef;
  constructor(
    private apiService: ApiService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  onClick(modal) {
    this.apiService.getProductImg(this.campaignId, this.imageObject.id).subscribe(
      data => {
        this.products = data['result'];
        this.openProductModal(modal);
        // Call tracking api
        (window as any).ugc_client.send({
          action: 'ugc_image_click',
          reqid: this.reqId,
          ugc_image_id: this.imageObject.id
        });
        console.log('ugc_image_click sent');
        console.log('log_id:' + this.reqId);
      },
      err => {


      }
    );
  }

  onProductClick(product: Product) {
    (window as any).ugc_client.send({
      action: 'product_click',
      reqid: this.reqId,
      ugc_image_id: this.imageObject.id,
      im_name: product.im_name
    });
    console.log('product_click sent');
    console.log('log_id:' + this.reqId);
  }

  onBuyBtnClick(product: Product) {
    (window as any).ugc_client.send({
      action: 'purchase',
      reqid: this.reqId,
      ugc_image_id: this.imageObject.id,
      im_name: product.im_name
    });
    console.log('purchase sent');
    console.log('log_id:' + this.reqId);
    window.alert('Buy clicked');
  }

  onCartBtnClick(product: Product) {
    (window as any).ugc_client.send({
      action: 'add_to_cart',
      reqid: this.reqId,
      ugc_image_id: this.imageObject.id,
      im_name: product.im_name
    });
    console.log('add_to_cart sent');
    console.log('log_id:' + this.reqId);
    window.alert('Cart clicked');
  }

  onWishlistBtnClick(product: Product) {
    (window as any).ugc_client.send({
      action: 'add_to_wishlist',
      reqid: this.reqId,
      ugc_image_id: this.imageObject.id,
      im_name: product.im_name
    });
    console.log('add_to_wishlist sent');
    console.log('log_id:' + this.reqId);
    window.alert('Wishlist clicked');
  }

  openProductModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
