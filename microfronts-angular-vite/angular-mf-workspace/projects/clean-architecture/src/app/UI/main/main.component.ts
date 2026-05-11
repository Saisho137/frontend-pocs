import { Component } from '@angular/core';
import { GetAlbumUseCases } from '../../domain/usecase/get-album-use-case';
import { Album } from '../../domain/models/Album/album';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private _getAlbumUseCase: GetAlbumUseCases) {}
  response$: Observable<Album> | undefined;
  datos?: Album;
  ngOnInit(): void {
    this.response$ = this._getAlbumUseCase.getAlbumById('20');
    this.response$.subscribe((data: Album) => {
      this.datos = data;
    });
  }
}
