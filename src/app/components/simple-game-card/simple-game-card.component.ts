import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-game-card',
  standalone: true,
  imports: [],
  templateUrl: './simple-game-card.component.html',
  styleUrl: './simple-game-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleGameCardComponent {
  @Input() link?: string;
  @Input() readMore = false;
}
