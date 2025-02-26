import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'map-service-demo-material',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './demo-material.component.html',
  styleUrls: ['./demo-material.component.css']
})
export class DemoMaterialComponent { }