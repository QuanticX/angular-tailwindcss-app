import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BouttonComponent } from './boutton/boutton.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-tailwindcss-app';
  typography = false;
  properties = false;
  metrics = false;
  layout = false;
  animation = false;
  options = false;

  onHoverTypography($event: any){
    this.typography = true;
  }

  onLeftTypography($event: any){
    this.typography = false;
  }
  
  onHoverProperties($event: any){
    this.properties = true;
  }

  onLeftProperties($event: any){
    this.properties = false;
  }

  onHoverMetrics($event: any){
    this.metrics = true;
  }

  onLeftMetrics($event: any){
    this.metrics = false;
  }

  onHoverLayout($event: any){
    this.layout = true;
  }

  onLeftLayout($event: any){
    this.layout = false;
  }

  onHoverAnimation($event: any){
    this.animation = true;
  }

  onLeftAnimation($event: any){
    this.animation = false;
  }

  onHoverOptions($event: any){
    this.options = true;
  }

  onLeftOptions($event: any){
    this.options = false;
  }

}
