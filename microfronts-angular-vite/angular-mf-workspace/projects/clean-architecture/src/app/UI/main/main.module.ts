import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AlbumApiServiceWithoutDelay } from '../../infraestructure/driven-adapter/album-api/album-api-withou-delay.service';
import { AlbumGateway } from '../../domain/models/Album/gateway/album-gateway';
import { GetAlbumUseCases } from '../../domain/usecase/get-album-use-case';
// import { AlbumApiService } from './infraestructure/driven-adapter/album-api/album-api.service';

const routes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [MainComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  providers: [
    GetAlbumUseCases,
    { provide: AlbumGateway, useClass: AlbumApiServiceWithoutDelay },
    // { provide: AlbumGateway, useClass: AlbumApiService },
  ],
  exports: [MainComponent],
})
export class MainModule {}
