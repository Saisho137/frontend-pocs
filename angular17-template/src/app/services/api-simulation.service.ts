import { Injectable } from '@angular/core';
import { ComponentNavbar } from '../interfaces/component-navbar';

@Injectable({
  providedIn: 'root'
})
export class ApiSimulationService {

  constructor() { }

  getComponents(): ComponentNavbar[] {
    return [{id: "1", name: "home"}, {id: "2", name: "logo"}, {id: "3", name: "login"}];
  }
}
