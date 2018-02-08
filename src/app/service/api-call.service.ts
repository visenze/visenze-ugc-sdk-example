import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { CampaignImgResponse, Product, UGCImgTagged } from '../models/response.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa(environment.accessKey + ':' + environment.secretKey)
  })
};
const baseUrl = '/api';
const campaignId = environment.campaignId;
@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getCampImg() {
    return this.http.get<CampaignImgResponse>(baseUrl + '/v1/taggedimgs/' + campaignId + '/', httpOptions);
  }

  getProductImg(campaign_id, image_id) {
    return this.http.get(baseUrl + '/v1/taggedproducts/' + campaign_id + '/' + image_id + '/', httpOptions);
  }

  getImgByProduct(campaign_id, im_name) {
    return this.http.get(baseUrl + '/v1/imgbyproduct/' + campaign_id + '/' + im_name + '/', httpOptions);
  }
}
