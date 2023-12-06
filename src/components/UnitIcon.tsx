import {
  faAmbulance,
  faFireExtinguisher,
  faTrafficLight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface UnitIconProps {
  category: string;
}

const UnitIcon = ({ category }: UnitIconProps) => {
  if (category === "Fire") {
    return <FontAwesomeIcon icon={faFireExtinguisher} />;
  }
  if (category === "Medical") {
    return <FontAwesomeIcon icon={faAmbulance} />;
  }
  if (category === "Traffic") {
    return <FontAwesomeIcon icon={faTrafficLight} />;
  }

  return <FontAwesomeIcon icon={faTrafficLight} />;
};

export default UnitIcon;
