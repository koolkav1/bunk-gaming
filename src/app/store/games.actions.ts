import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Game } from "../rawg-api.service";
import { GamesApiResponse } from "../interfaces/games.interface";

export const GamesActionGroup = createActionGroup({
  source: 'Games Page',
  events: {
    'Get Games': emptyProps(),
    'Get Games By Developer': props<{ developerId: number, slug: string, page?: number}>(),
    'Get Games By Developer Success': props<{data: GamesApiResponse, page: number}>(),
    'Get Games By Developer Failure': props<{ errorMsg: string}>(),
    'Pagination Changed': props<{ page: number }>(),
    'Set Game': props<{game: Game}>(),
  }
});
