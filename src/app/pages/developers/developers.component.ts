import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Developer, RawgApiService } from '../../rawg-api.service';
import { Store } from '@ngrx/store';
import { GamesActionGroup } from '../../store/games.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss'],
})
export class DevelopersComponent {
  public developers$: Observable<Developer[]>;

  constructor(private rawgApiService: RawgApiService, private store: Store, private router: Router) {
    this.developers$ = this.rawgApiService.getDevelopers();
  }

  navigateToGamesByDeveloper(developerId: number, slug: string): void {
    this.store.dispatch(GamesActionGroup.getGamesByDeveloper({developerId, slug}));
    this.router.navigateByUrl(`/developers/${developerId}/${slug}`);
  }
}
