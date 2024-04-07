import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { GameDetail } from "../../interfaces/game-detail.interface";
import { Screenshot } from "../../interfaces/game-screenshots.interface";

export const GameActionGroup = createActionGroup({
  source: 'Game Page',
  events: {
    'Get Game': props<{gameId: number, developerName?: string}>(),
    'Get Game Success': props<{game: GameDetail}>(),
    'Get Game Failure': props<{errorMsg: string}>(),
    'Get Game Screenshots': props<{gameId: number}>(),
    'Get Game Screenshots Success': props<{screenshots: Screenshot[]}>(),
    'Get Game Screenshots Failure': props<{errorMsg: string}>(),

    'No op': emptyProps()
  }
})
