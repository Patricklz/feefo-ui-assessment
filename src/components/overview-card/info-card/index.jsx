import PropTypes from "prop-types";
import {StatisticSalesUploadCard, StatisticContainer, StatisticCard} from "./styles"
import UploadCard from "../upload-card";
import Details from "../details";

const StatisticSalesCard = ({
  uploads,
  successfulUploads,
  linesAttempted,
  linesSaved,
}) => {
  return (
    <>
      <StatisticSalesUploadCard>
        <UploadCard uploads={uploads} linesAdded={linesSaved} />
      </StatisticSalesUploadCard>
      <StatisticContainer>
        <StatisticCard borderRadius="left">
          <Details
            messageStatus="upload success"
            progress={uploads > 0 ? (successfulUploads / uploads) * 100 : 0}
          />
        </StatisticCard>
        <StatisticCard borderRadius="right">
          <Details
            messageStatus="lines saved"
            progress={linesSaved > 0 ? (linesSaved / linesAttempted) * 100 : 0}
          />
        </StatisticCard>
      </StatisticContainer>
    </>
  );
};

StatisticSalesCard.propTypes = {
  uploads: PropTypes.number,
  successfulUploads: PropTypes.number,
  linesAttempted: PropTypes.number,
  linesSaved: PropTypes.number,
};

export default StatisticSalesCard;