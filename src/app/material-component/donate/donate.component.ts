import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DemoMaterialModule } from 'src/app/demo-material-module';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [DemoMaterialModule, MatButtonModule],
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent {
  constructor() { }
}
