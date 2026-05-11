import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsWihoutAtomsComponent } from './components/forms-wihout-atoms/forms-wihout-atoms.component';
import { FormsWithAtomsComponent } from './components/forms-with-atoms/forms-with-atoms.component';

const routes: Routes = [
  {path: '', redirectTo: '/reactive-forms-atomic-design', pathMatch: 'full'},
  {path: 'reactive-forms-vanilla', component: FormsWihoutAtomsComponent, pathMatch: 'full', title: 'Reactive Forms'},
  {path: 'reactive-forms-atomic-design', component: FormsWithAtomsComponent, pathMatch: 'full',title: 'Reactive Forms'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
