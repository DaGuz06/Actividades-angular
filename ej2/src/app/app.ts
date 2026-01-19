import { Component, signal } from '@angular/core';
import { HeroPageComponent } from './pages/hero/hero-page.component';

@Component({
  selector: 'app-root',
  imports: [HeroPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public title: string = 'App con angular';

  //actContador
  public count: number = 0;
  counterSignal = signal(10);


  increment():void {
    this.count += 1;
  }

  decrement():void {

    if (this.count === 0) {
      alert("El contador no puede ser menor que 0");
    } else {
      this.count -= 1;
    }
  }

  reset():void {
    this.count = 0;
  }


}
