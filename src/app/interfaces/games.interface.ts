import { Game } from "../rawg-api.service"

export interface GamesApiResponse {
  count: number
  next: string
  previous: string
  results: Game[]
  user_platforms: boolean
}
