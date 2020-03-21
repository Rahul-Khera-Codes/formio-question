import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { RatingWrapperModule } from 'src/app/rating-wrapper/rating-wrapper.module';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    RatingWrapperModule
  ]
})
export class TestModule { }
