import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormioModule } from 'angular-formio';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { registerRatingComponent } from './rating-wrapper.formio';
import { RatingWrapperComponent } from './rating-wrapper.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RatingWrapperComponent
  ],
  imports: [
    CommonModule,
    FormioModule,
    FormsModule,
    NgbRatingModule
  ],
  entryComponents: [
    RatingWrapperComponent
  ],
  exports: [
    RatingWrapperComponent,
    FormioModule,
    FormsModule
  ]
})
export class RatingWrapperModule {
  constructor(private injector: Injector) {
    registerRatingComponent(injector);
  }
}
