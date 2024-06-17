import React from 'react';
import PropTypes from "prop-types";
import ContactHeader from './components/contact/header';
import StatisticSalesCard from './components/overview-card/info-card';

export const AccountOverview = ({data}) => {
  console.log(data?.salesOverview?.linesAttempted);

  return (
    <div className="AccountOverview">
  <ContactHeader
      email={data?.supportContact?.email}
      name={data?.supportContact?.name}
      phone={data?.supportContact?.phone}
  />

    <StatisticSalesCard 
            uploads={data?.salesOverview?.uploads}
            successfulUploads={data?.salesOverview?.successfulUploads}
            linesAttempted={data?.salesOverview?.linesAttempted}
            linesSaved={data?.salesOverview?.linesSaved}
    />

    </div>
  )
}


AccountOverview.propTypes = {
  data: PropTypes.shape({
    supportContact: PropTypes.shape({
      email: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    }),
    salesOverview: PropTypes.shape({
      uploads: PropTypes.number,
      successfulUploads: PropTypes.number,
      linesAttempted: PropTypes.number,
      linesSaved: PropTypes.number,
    }),
  }),
};

export default AccountOverview;