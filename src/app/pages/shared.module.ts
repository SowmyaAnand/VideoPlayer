  //to add this module use command ionic g module pages/shared --flat   (where flat is used if u dont want create whole directory)

import { IonicModule } from '@ionic/angular';
import { SkeletonPage } from './skeleton/skeleton.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  //add the connecting page that is  shared module implements skeleton and by importing shared module u can implement skeleton everywhere
 //The set of selectors that are available to a template include those declared here, in declarations
  declarations: [SkeletonPage],
  exports :[SkeletonPage],
  entryComponents:[SkeletonPage],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ]
})
export class SharedModule { }
