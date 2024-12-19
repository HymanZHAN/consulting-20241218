import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DemoMaterialModule } from 'src/app/demo-material-module';

@Component({
  selector: 'app-credit_card',
  standalone: true,
  imports: [DemoMaterialModule, MatButtonModule],
  templateUrl: './credit_card.component.html',
  styleUrls: ['./credit_card.component.scss']
})
export class CreditCardComponent {
  constructor() { }
}
