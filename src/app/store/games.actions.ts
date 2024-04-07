import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { GamesApiResponse, GameByDeveloper } from "../interfaces/games.interface";


export const GamesActionGroup = createActionGroup({
  source: 'Games Page',
  events: {
    'Get Games By Developer': props<{ developerId: number, slug: string, page?: number}>(),
    'Get Games By Developer Success': props<{data: GamesApiResponse, page: number, developerId: number}>(),
    'Get Games By Developer Failure': props<{ errorMsg: string}>(),
    'No op': emptyProps(), // empty action
    'Set Game': props<{game: GameByDeveloper}>(),
  }
});
