import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  public title: string = 'App con angular';

  public count: number = 10;


  increment():void {
    this.count += 1;
  }

  decrement():void {
    this.count -= 1;
  }
 
}
