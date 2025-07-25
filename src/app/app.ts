import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header-component/header-component';
import { ContentComponent } from './components/content-component/content-component';

@Component({
  selector: 'app-root',
  //Para utilizarmos outros componentes no app-component,
  //Devemos importa-los aqui:
  imports: [RouterOutlet,  HeaderComponent, ContentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
