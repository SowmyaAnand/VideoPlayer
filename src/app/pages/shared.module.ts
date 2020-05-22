import { IonicModule } from '@ionic/angular';
import { SkeletonPage } from './skeleton/skeleton.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  //add the connecting page
  declarations: [SkeletonPage],
  exports :[SkeletonPage],
  entryComponents:[SkeletonPage],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ]
})
export class SharedModule { }
