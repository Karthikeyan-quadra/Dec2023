import * as React from 'react';
import styles from './Calendar.module.scss';
import {
  mergeClasses,
  makeStyles,
  tokens,
  shorthands,
  FluentProvider,
  webLightTheme,
} from "@fluentui/react-components";
import { Card, Button } from "@fluentui/react-components";
const useStyles = makeStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    columnGap: "16px",
    rowGap: "36px",
  },

  title: {
    ...shorthands.margin(0, 0, "12px"),
  },

  card: {
    width: "300px",
    maxWidth: "100%",
    height: "fit-content",
  },

  flex: {
    // ...shorthands.gap("4px"),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  appIcon: {
    ...shorthands.borderRadius("4px"),
    height: "32px",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  cardFooter: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 'auto'
  },
});


export default function Calendar() {
  const style = useStyles();
  const handleClickCrmTicket = () => {
    window.open('https://forms.office.com/r/i15dT0utrv', '_blank');
  };
  const handleClickTms = () => {
    window.open('https://quadra1.sharepoint.com/sites/spdev/TMS/SitePages/Home.aspx', '_blank');
  };
  const handleClickTechCrm = () => {
    window.open('https://quadra1.sharepoint.com/sites/TechCRM#/', '_blank');
  };
  return (
    <section >
      <FluentProvider theme={webLightTheme}>

        <div >
          {/* 1st card */}
          <div className="row">
            <div className="CrmTicketcolumn">
              <Card className={styles.CrmTicketcard}>
                <div className={styles.container}>

                  <header style={{ marginBottom: '1rem' }}>
                    <img src={require("../assets/CRMTicket.png")} alt="CRM Ticket logo" />
                  </header>


                  <p className={styles.text}>
                    CRM Ticket
                  </p>
                  <p className={styles.caption}>Request your CRM ticket</p>

                  <footer className={mergeClasses(style.flex, style.cardFooter)}>

                    <Button onClick={handleClickCrmTicket} className={styles.CrmTicketbutton}>Request</Button>

                  </footer>
                </div>
              </Card>
            </div>
            {/* 2nd card */}
            <div className="Tmscolumn">
              <Card className={styles.Tmscard}>
                <div className={styles.container}>

                  <header style={{ marginBottom: '1rem' }}>
                    <img src={require("../assets/TMS.png")} alt="TMS logo" />
                  </header>
                  <p className={styles.text}>
                    TMS
                  </p>
                  <p className={styles.caption}>Travel management system</p>

                  <footer className={mergeClasses(style.flex, style.cardFooter)}>

                    <button onClick={handleClickTms} className={styles.Tmsbutton}>Open</button>

                  </footer>
                </div>
              </Card>
            </div>
          </div>
          {/* 3rd card */}
          <div className="row">
            <div className={styles.TechCrmcard}>
              <div className={styles.TechCrm}>
                <Card style={{ height: '188px' }}>
                  <div className={styles.container}>
                    <header style={{ marginBottom: '1rem' }}>
                      <img src={require("../assets/Tech CRM.png")} className={styles.Techcrmlogo} alt="Tech CRM logo" />
                    </header>
                    <p className={styles.text}>
                      Tech CRM
                    </p>
                    <p className={styles.caption}>Log your customer activities here</p>

                    <footer className={mergeClasses(style.flex, style.cardFooter)}>

                      <button onClick={handleClickTechCrm} className={styles.TechCrmbutton}>Open</button>

                    </footer>
                  </div>
                </Card>
              </div>
              <>
                <img src={require("../assets/Laptop-image.png")} className={styles.TechCrmImage} alt="Laptop-image.png" />
              </>
            </div>
          </div>
        </div>
      </FluentProvider>
    </section>
  );
}

