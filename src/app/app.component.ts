import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  deleted: boolean = false;
  state: string = 'delete';
  test: string = 'Starting value';
  boundValue: number = 1000;

  private changeState() {
    this.deleted = !this.deleted;
    if(this.deleted == false) {
      this.state = 'delete';
    }
    else {
      this.state = 'add';
    }
  }
}
