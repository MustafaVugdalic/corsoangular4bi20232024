import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumsComponent } from './albums/albums.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'artists', component: ArtistComponent},
    {path: 'albums/:id', component: AlbumsComponent},
    {path: '**', component: NotFoundComponent}
];
