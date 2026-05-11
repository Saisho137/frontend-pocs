import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage  } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage, NavbarComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  childEmition: string = "";

  logoSaishoUrl: string = "/assets/images/logoSaisho.png"
  title: any;

  receiveEmition($event: string): void {
    this.childEmition = $event;
  }
  propertyParent: string = "Prop from Parent Component";
}
