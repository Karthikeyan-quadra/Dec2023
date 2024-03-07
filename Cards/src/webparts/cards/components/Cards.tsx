import * as React from "react";
import styles from './Cards.module.scss';
import "bootstrap/dist/css/bootstrap.min.css";

// import { ICardsProps } from './ICardsProps';
// import { escape } from '@microsoft/sp-lodash-subset';

export default function Cards() {
  const handleClickCrmTicket = () => {
    window.open('https://forms.office.com/r/i15dT0utrv', '_blank');
  };
  // const handleClickTms = () => {
  //   window.open('https://quadra1.sharepoint.com/sites/spdev/TMS/SitePages/Home.aspx', '_blank');
  // };
  const handleClickTechCrm = () => {
    window.open('https://quadra1.sharepoint.com/sites/TechCRM#/', '_blank');
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-md-6 col-lg-6 col-xl-6 border border-5 border-warning m-0 p-0">
          <div className={`${styles.CRM_card} card`}>
          <img src={require("../assets/CRMTicket.png")} className={`${styles.CRM_logo} ps-2`} alt="CRM Ticket logo" />

            <p className={`${styles.Text} ms-3`}>CRM Ticket</p>
            <p className={`${styles.Caption} ms-3`}>Request your CRM ticket</p>
            <button onClick={handleClickCrmTicket} className={`${styles.CrmTicketbutton} ms-3 mt-4`}>Request</button>
          </div>

          <div className={`${styles.TCRM_card} card ms-2`}>
            <div className={`${styles.TCRM_column}`}>
              <div className="w-50 border border-2 border-danger">
              <img src={require("../assets/TechCRM.png")} className={`${styles.TCRM_logo} ps-2`} alt="Tech CRM logo" />
            <p className={`${styles.Text} ms-3`}>Tech CRM</p>
            <p className={`${styles.Caption} ms-3`}>Log your customer activities here</p>
            <button onClick={handleClickTechCrm} className={`${styles.CrmTicketbutton} ms-3 mt-4`}>Open</button>
              </div>
              <div className="w-50 border border-2 border-success">
              <img src={require("../assets/Laptop-image.png")} alt="Laptop-image.png" className="w-100 h-100"/>
              </div>
            {/* <div className="col border border-2 border-danger w-50">
            <img src={require("../assets/TechCRM.png")} className={`${styles.TCRM_logo} ps-2`} alt="Tech CRM logo" />
            <p className={`${styles.Text} ms-3`}>Tech CRM</p>
            <p className={`${styles.Caption} ms-3`}>Log your customer activities here</p>
            <button onClick={handleClickTechCrm} className={`${styles.CrmTicketbutton} ms-3 mt-4`}>Open</button>
            </div> */}

            {/* <div className="col col border border-2 border-danger w-50">
            <img src={require("../assets/Laptop-image.png")}  alt="Laptop-image.png" />
            </div> */}

          </div>
          </div>

        </div>
        <div className="col col-md-6 col-lg-6 col-xl-6 border border-5 border-danger">
        <div className="card">
            <p>This is a sample card</p>
          </div>
          <div className="card">
            <p>This is a sample card</p>
          </div>
        </div>
      </div>
    </div>
  );
}
