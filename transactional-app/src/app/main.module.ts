import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AccountGateway } from '@/app/domain/models/account/account.gateway';
import { GetBalanceUseCase } from '@/app/domain/usecases/account/get-balance.usecase';
import { CrudAccountUseCases } from '@/app/domain/usecases/account/crud-account.usecases';
import { AccountGatewayService } from '@/app/infraestructure/gateways/account-gateway.service';
import { UserInfoComponent } from '@/app/Presentation/UI/components/molecules';
import { UsersTableComponent } from '@/app/Presentation/UI/components/organisms';
import { HeaderComponent } from './Presentation/UI/components/organisms';
import { FooterComponent } from './Presentation/UI/components/organisms';
import { PageLayoutComponent } from './Presentation/UI/components/templates';
import { MainComponent } from '@/app/Presentation/UI/pages';

const routes: Routes = [
  {
    path: 'users-table',
    component: UsersTableComponent,
    pathMatch: 'full',
    title: 'Admin Panel',
  },
  {
    path: 'about',
    component: HeaderComponent,
    pathMatch: 'full',
    title: 'Admin Panel',
  },
  { path: '', redirectTo: '/users-table', pathMatch: 'prefix' },
];

@NgModule({
  declarations: [
    MainComponent,
    UserInfoComponent,
    UsersTableComponent,
    HeaderComponent,
    FooterComponent,
    PageLayoutComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    CrudAccountUseCases,
    GetBalanceUseCase,
    { provide: AccountGateway, useClass: AccountGatewayService },
  ],
  bootstrap: [MainComponent],
})
export class MainModule {}
