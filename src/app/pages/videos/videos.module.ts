import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LongPressModule } from 'ionic-long-press';

import { VideosPageRoutingModule } from './videos-routing.module';
import { SharedModule } from 'src/app/pages/shared.module';

import { VideosPage } from './videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    VideosPageRoutingModule,
    LongPressModule
  ],
  declarations: [VideosPage]
})
export class VideosPageModule {}
