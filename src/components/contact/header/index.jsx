import React from "react";
import { ContactContainerHeader, Title} from "./styles.js"
import PropTypes from "prop-types";
import InfoContact from "../info/index.jsx";


const ContactHeader = ({ email, name, phone }) => (
  <ContactContainerHeader>
    <Title>Account Overview</Title>
    <InfoContact email={email} name={name} phone={phone} />
  </ContactContainerHeader>
);

ContactHeader.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};

export default ContactHeader;