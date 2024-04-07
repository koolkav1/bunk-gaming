import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelopersComponent } from './pages/developers/developers.component';
import { HomeComponent } from './home/home.component';
import { PlatformsComponent } from './pages/platforms/platforms.component';
import { SimpleGameCardComponent } from './components/simple-game-card/simple-game-card.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { gamesReducer } from './store/games.reducers';
import { GamesEffects } from './store/games.effects';
import { GameComponent } from './pages/game/game.component';
import { gameReducer } from './store/game/game.reducers';
import { GameEffects } from './store/game/game.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlatformsComponent,
    DevelopersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SimpleGameCardComponent,
    GameCardComponent,
    GameDetailComponent,
    GameComponent,
    StoreModule.forRoot({ games: gamesReducer, game: gameReducer }),
    EffectsModule.forRoot([GamesEffects, GameEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
