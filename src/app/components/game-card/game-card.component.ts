import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DateWithOrdinalPipe } from '../../pipes/date-with-ordinal.pipe';
import { PlatformsArrayPipe } from '../../pipes/platforms-array.pipe';
import { GameByDeveloper } from '../../interfaces/games.interface';


@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [DateWithOrdinalPipe, PlatformsArrayPipe],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameCardComponent {
@Input() game!: GameByDeveloper;
@Input() developerName!: string;
@Input() link!: string;
}
