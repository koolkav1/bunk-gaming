import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [],
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameDetailComponent {

}
