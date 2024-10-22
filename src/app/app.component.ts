import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GermanMapComponent } from './german-map/german-map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GermanMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-openlayers';
}
