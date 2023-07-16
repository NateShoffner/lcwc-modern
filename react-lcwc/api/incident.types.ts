export type Unit = {
    name: string
}
  
export type Coordinates = {
    longitude: number
    latitude: number
}

export type Incident = {
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
};