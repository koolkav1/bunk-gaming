import { ChangeDetectionStrategy, Component, Input, Signal } from '@angular/core';
import { DateWithOrdinalPipe } from "../../pipes/date-with-ordinal.pipe";
import { PlatformsArrayPipe } from "../../pipes/platforms-array.pipe";
import { GameByDeveloper } from '../../interfaces/games.interface';
import { GameDetail } from '../../interfaces/game-detail.interface';
import { Screenshot } from '../../interfaces/game-screenshots.interface';
import { DevelopersArrayPipe } from "../../pipes/developers-array.pipe";

@Component({
    selector: 'app-game-detail',
    standalone: true,
    templateUrl: './game-detail.component.html',
    styleUrl: './game-detail.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [DateWithOrdinalPipe, PlatformsArrayPipe, DevelopersArrayPipe]
})
export class GameDetailComponent {
@Input() game!: Signal<GameDetail>;
@Input() gameScreenshots!: Signal<Screenshot[]>;

}
