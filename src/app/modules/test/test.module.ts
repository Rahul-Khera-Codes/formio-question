import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { FormsModule } from '@angular/forms';
import { FormioModule } from 'angular-formio';
import { registerRatingComponent } from 'src/app/rating-wrapper/rating-wrapper.formio';


@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    FormsModule,
    FormioModule
  ]
})
export class TestModule {
  constructor(private injector: Injector) {
    registerRatingComponent(injector);
  }
}
