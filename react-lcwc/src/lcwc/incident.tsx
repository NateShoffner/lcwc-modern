export interface Incident {
  category: string
  date: string
  description: string
  municipality: string
  intersection: string
  units: Unit[]
  number: number
  priority?: number
  agency: string
  public: boolean
  coordinates: Coordinates

  status: string
}

export interface Unit {
  name: string
}

export interface Coordinates {
  longitude: number
  latitude: number
}
