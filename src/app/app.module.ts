import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RatingWrapperModule } from './rating-wrapper/rating-wrapper.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RatingWrapperModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "test",
        pathMatch: "full"
      },
      {
        path: "test",
        loadChildren: () => import("./modules/test/test.module").then(m => m.TestModule)
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

