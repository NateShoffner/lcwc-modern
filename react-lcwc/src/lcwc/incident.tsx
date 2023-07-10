class Incident {
    category: string;
    description: string;
    municipality: string;
    intersection: string;
    number: number;
    priority?: number
    agency: string;
    units: string[];

    constructor(category: string, description: string, municipality: string, intersection: string, number: number, priority: number, agency: string, units: string[]) {
        this.category = category;
        this.description = description;
        this.municipality = municipality;
        this.intersection = intersection;
        this.number = number;
        this.priority = priority;
        this.agency = agency;
        this.units = units;
    }
}

export default Incident;
