import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import {
  faHashtag,
  faClock,
  faArrowUpWideShort,
  faCalendarAlt,
  faLocationPin,
  faFireExtinguisher,
  faAmbulance,
  faTrafficLight,
} from "@fortawesome/free-solid-svg-icons";
import { Incident } from "@api/incident.types";
import UnitIcon from "./UnitIcon";

function IncidentCard(incident: Incident) {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="mb-3">{incident.description}</Card.Title>
        <Card.Text>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
              <p className="fw-bold mb-auto">
                <FontAwesomeIcon icon={faLocationPin} /> Location:
              </p>
              <p className="mb-auto">{incident.intersection}</p>
              <p className="mb-auto">{incident.municipality}</p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
              <p className="fw-bold mb-auto">
                <FontAwesomeIcon icon={faCalendarAlt} /> Date/Time (EST):
              </p>
              <p className="mb-auto"></p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
              <p className="fw-bold mb-auto">
                <FontAwesomeIcon icon={faClock} /> Agency:
              </p>
              <p className="mb-auto">{incident.agency}</p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
              <p className="fw-bold mb-auto">
                <UnitIcon category={incident.category} /> Assigned Units: (
                {incident.units.length})
              </p>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5">
            <small className="text-muted">
              <FontAwesomeIcon icon={faClock} /> Updated: Unknown
            </small>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <small className="text-muted">
              <FontAwesomeIcon icon={faArrowUpWideShort} /> Priority:{" "}
              {incident.priority ?? "N/A"}
            </small>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <small className="text-muted">
              <FontAwesomeIcon icon={faHashtag} /> {incident.number ?? "N/A"}
            </small>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default IncidentCard;
