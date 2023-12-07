export type Agency = {
    id: string;
    category: string;
    station_id: string;
    name: string;
    url: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    phone: string;
    updated_at: string;
};

export type AgencyData = {
    data: Agency;
  };

export type AgenciesData = {
    count: number;
    data: Agency[];
}