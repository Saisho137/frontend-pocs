import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { PermissionsGuard } from './guards/permissions.guard';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { WithoutSaveGuard } from './guards/without-save.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'admin-panel', title: 'Panel Admin', component: AdminPanelComponent, canActivate: [PermissionsGuard] },
  { path: 'reactive-form', title: 'Example Form', component: ReactiveFormComponent, canDeactivate: [WithoutSaveGuard] },
];
