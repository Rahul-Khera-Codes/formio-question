import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  builder = true;
  form: any = {};

  onChange(event: any) {
    console.log(event);
    if (['addComponent', 'saveComponent', 'deleteComponent'].indexOf(event.type) > -1) {
      this.form = event.form;
    }
  }

  ngOnInit() {
  }

}
