import { Component, Output } from '@angular/core';
import { ApiService } from './service/api-call.service';
import { CampaignImgResponse } from './models/response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent { }
