import ratingU from "./bbfc/BBFC_U_2019.svg";
import ratingPG from "./bbfc/BBFC_PG_2019.svg";
import rating12A from "./bbfc/BBFC_12A_2019.svg";
import rating12 from "./bbfc/BBFC_12_2019.svg";
import rating15 from "./bbfc/BBFC_15_2019.svg";
import rating18 from "./bbfc/BBFC_18_2019.svg";
import ratingR18 from "./bbfc/BBFC_R18_2019.svg";

const Classification = ({classification}) => {

  switch (classification) {
    case "U":
      return (
        <img src={ratingU} alt="Rated U by the BBFC" />
      );
      break;

      case "PG":
        return (
          <img src={ratingPG} alt="Rated PG by the BBFC" />
        );
        break;

      case "12A":
        return (
          <img src={rating12A} alt="Rated 12A by the BBFC" />
        );
        break;

      case "12":
        return (
          <img src={rating12} alt="Rated 12 by the BBFC" />
        );
        break;

      case "15":
        return (
          <img src={rating15} alt="Rated 15 by the BBFC" />
        );
        break;

      case "18":
        return (
          <img src={rating18} alt="Rated 18 by the BBFC" />
        );
        break;

      case "R18":
        return (
          <img src={ratingR18} alt="Rated R18 by the BBFC" />
        );
        break;

    default:
      return (
        <span>
          Rating not found
        </span>
      )
  }

};

export default Classification;
