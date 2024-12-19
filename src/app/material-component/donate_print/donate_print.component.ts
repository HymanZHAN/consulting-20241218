import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DemoMaterialModule } from 'src/app/demo-material-module';

@Component({
  selector: 'app-donate_print',
  standalone: true,
  imports: [DemoMaterialModule, MatButtonModule],
  templateUrl: './donate_print.component.html',
  styleUrls: ['./donate_print.component.scss']
})
export class DonatePrintComponent {
  constructor() { }
}
