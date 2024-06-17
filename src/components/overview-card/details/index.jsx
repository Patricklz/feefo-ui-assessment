import React from "react";
import { Data, StatisticDetails } from "./styles"
import PropTypes from "prop-types";

const Details = ({ messageStatus, progress }) => {
  const formattedData = progress ? progress.toFixed(0) : "";
  return (
    <>
      <Data>{progress ? formattedData + "%" : "-"}</Data>
      <StatisticDetails>{messageStatus.toUpperCase()}</StatisticDetails>
    </>
  );
};

Details.propTypes = {
  messageStatus: PropTypes.string,
  progress: PropTypes.number,
};

export default Details;