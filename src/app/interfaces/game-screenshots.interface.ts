export interface GameScreenshotsApiResponse {
  count: number
  next: any
  previous: any
  results: Screenshot[]
}

export interface Screenshot {
  id: number
  image: string
  width: number
  height: number
  is_deleted: boolean
}
