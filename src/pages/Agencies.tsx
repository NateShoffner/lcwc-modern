import { useGetAgencies } from "@hooks/useGetAgencies";
import { Alert } from "react-bootstrap";

const PhoneLink = ({ phone }: { phone: string }) => {
  if (phone.length === 0) {
    return <></>;
  }

  return (
    <a href={`tel:${phone}`} className="text-decoration-none">
      {phone}
    </a>
  );
};

const AddressLink = ({ address }: { address: string }) => {
  if (address.length === 0) {
    return <></>;
  }

  if (address.includes("PO Box")) {
    return <>{address}</>;
  }

  return (
    <a
      href={`https://www.google.com/maps/search/${address}`}
      target="_blank"
      rel="noreferrer"
      className="text-decoration-none"
    >
      {address}
    </a>
  );
};

const AgencyTables = () => {
  const categories = ["Fire", "Medical", "Traffic"];

  const tables = categories.map((category) => {
    const agencies = useGetAgencies(category);

    if (agencies.isLoading) {
      return (
        <Alert variant="info" key={category}>
          Loading...
        </Alert>
      );
    }

    if (agencies.isError) {
      return (
        <Alert variant="danger" key={category}>
          Error Loading Agencies
        </Alert>
      );
    }

    if (agencies.isSuccess) {
      const sortedAgencies = agencies.data.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      return (
        <>
          <h2 className="mb-3 mt-5">{category} Agencies:</h2>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Station #</th>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {sortedAgencies.map((agency) => {
                const address = `${agency.address}, ${agency.city}, ${agency.state} ${agency.zip_code}`;
                return (
                  <tr key={agency.id}>
                    <td>{agency.station_id}</td>
                    <td>{agency.name}</td>
                    <td>
                      <AddressLink address={address} />
                    </td>
                    <td>
                      <PhoneLink phone={agency.phone} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      );
    }
  });

  return <>{tables}</>;
};

const AgenciesPage = () => {
  return (
    <>
      <h1 className="mb-5">Agencies</h1>

      <AgencyTables />
    </>
  );
};

export default AgenciesPage;
