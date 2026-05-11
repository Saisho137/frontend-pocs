import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentNavbar } from '../../interfaces/component-navbar';
import { ApiSimulationService } from '../../services/api-simulation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() propertyChild: string = "";
  @Output() greet: EventEmitter<string> = new EventEmitter<string>();

  componentsNavbar: ComponentNavbar[] = [];
  constructor(private apiService: ApiSimulationService) {
    this.componentsNavbar = apiService.getComponents()
  }

  isInHome: boolean = true;
  
  handleHover(item: string): void {
    console.log(`Mouse on ${item}`)
  }
  emitToParent(): void {
    this.greet.emit("Greetings parent! Im your child.")
  }
}
