import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { ImagePageComponent } from './image-page/image-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ImageListComponent, ImageCardComponent],
  exports: [ImageListComponent, ImageCardComponent]
})
export class BrowseModule { }
