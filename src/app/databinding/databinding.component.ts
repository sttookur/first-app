import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation: string = "This is string interpolation!";
  numberInterpolation: number = 2;

  onTest(): boolean {
    return true;
  }

  onClicked(value: string) {
    alert(value);
  }
}
