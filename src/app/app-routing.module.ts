import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevelopersComponent } from './pages/developers/developers.component';
import { HomeComponent } from './home/home.component';
import { PlatformGamesComponent } from './platform-games/platform-games.component';
import { PlatformsComponent } from './pages/platforms/platforms.component';
import { GamesComponent } from './games/games.component';
import { DeveloperGamesComponent } from './pages/developer-games/developer-games.component';
import { gamesByDeveloperResolver } from './resolvers/games-by-developer.resolver';
import { GameComponent } from './pages/game/game.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'platforms',
    component: PlatformsComponent,
  },
  {
    path: 'developers',
    component: DevelopersComponent,
  },
  {
    path: 'developers/:id/:slug/:page',
    component: DeveloperGamesComponent,
    resolve: {games: gamesByDeveloperResolver}
  },
  {
    path: 'platforms/:id/:slug', component: PlatformGamesComponent},
  {path: 'games/:id/:slug', component: GamesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
