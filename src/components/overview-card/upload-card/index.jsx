import React from "react";
import { UploadCardContainer, Content,  UploadIcon, SubTitle, UploadDetails, BoldText } from "./styles"
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faUpload } from "@fortawesome/free-solid-svg-icons";

const UploadCard = ({ uploads, linesAdded }) => {
  const uploadLabel = ` ${uploads} ${uploads === 1 ? "upload" : "uploads"} `;
  const lineLabel = ` ${linesAdded === 1 ? "line" : "lines"}`;
  return (
    <>
      <UploadCardContainer>
        <Content>
          <UploadIcon>
            <FontAwesomeIcon icon={faUpload} />
          </UploadIcon>
          <SubTitle>Sales</SubTitle>
        </Content>
        <FontAwesomeIcon
          icon={faInfoCircle}
          color="#afaeac"
          aria-hidden="false"
          aria-label="info"
        />
      </UploadCardContainer>
      {uploads !== undefined && linesAdded !== undefined && (
        <UploadDetails>
          You had
          <BoldText>{uploadLabel}</BoldText>
          and <BoldText>{linesAdded}</BoldText>
          {lineLabel} added.
        </UploadDetails>
      )}
    </>
  );
};

UploadCard.propTypes = {
  uploads: PropTypes.number,
  linesAdded: PropTypes.number,
};

export default UploadCard;