import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { style } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
   public count : number = 0;

   DisplayCount(val : string)
   {
    if(val === 'incr')
    {
      this.count++;
      console.warn(this.count);
    }
    else
    {
      this.count--;
      console.warn('%c decresing','color:red' + this.count);
    }
   }
}
