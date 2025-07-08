import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header-component/header-component';
import { ContentComponent } from './components/content-component/content-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  HeaderComponent, ContentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Ola mundo!';
}
