export type Unit = {
    id: string
    name: string,
    short_name?: string
    added_at: string
    removed_at?: string,
    last_seen: string
    automatically_removed: false
}
  
export type Coordinates = {
    longitude: number
    latitude: number
}

export type Meta = {
    added_at: string
    updated_at: string
    resolved_at: string
    client: string
    automatically_resolved: boolean
}

export type Incident = {
    id: string
    category: string
    dispatched_at: string
    description: string
    municipality: string
    intersection: string
    units: Unit[]
    number: number
    priority?: number
    agency: string
    meta: Meta
    coordinates: Coordinates
};

export type IncidentData = {
    data: Incident
}

export type IncidentsData = {
    data: Incident[]
    count: number
}