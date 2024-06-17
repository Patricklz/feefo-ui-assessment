import React from "react";
import {InfoTitle, InfoContainer, InfoIconContainer, InfoDetailsContainer, InfoName, InfoEmailIcon, InfoDetails} from "./styles"
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const InfoContact = ({ email, name, phone }) => (
  <div>
    <InfoTitle>Your Feefo Support Contact</InfoTitle>
    <InfoContainer>
      <InfoIconContainer>{name ? name[0] : "-"}</InfoIconContainer>
      <InfoDetailsContainer>
        <InfoName>{name ? name : ""}</InfoName>
        <InfoDetails>
          {email && (
            <div>
              <InfoEmailIcon>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  aria-hidden="false"
                  aria-label="email"
                />
              </InfoEmailIcon>
              {email}
            </div>
          )}
          {phone ? phone : ""}
        </InfoDetails>
      </InfoDetailsContainer>
    </InfoContainer>
  </div>
);

InfoContact.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};

export default InfoContact;