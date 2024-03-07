import * as React from "react";
import styles from "./Query.module.scss";
import { IQUERYLIST } from "../../../interface";
import { SPFI } from "@pnp/sp";
import { useEffect, useState } from 'react';
import { IQueryProps } from "./IQueryProps";
import {
  mergeClasses,
  makeStyles,
  tokens,
  shorthands,
  FluentProvider,
  webLightTheme,
} from "@fluentui/react-components";
import { Card, CardHeader} from "@fluentui/react-components";


import { getSP } from "../../../pnpConfig";

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
    marginTop: "auto",
  },
});


const QueryList = (props: IQueryProps) => {
  const LOG_SOURCE = "QueryList Webpart";
  const LIST_NAME = "Card";
  let _sp: SPFI = getSP(props.context);
 
  console.log(LOG_SOURCE);
 
  const [listItems, setListItems] = useState<IQUERYLIST[]>([]);
 
  const getQueryList = async () => {
    console.log("context", _sp);
 
    const items = await _sp.web.lists.getByTitle(LIST_NAME).items();
 
    console.log("List Items", items);
 
    setListItems(
      items.map((item: any) => ({
        Id: item.Id,
        Image: item.Image ? item.Image.Url : "",
        Title: item.Title,
        Description: item.Description,
        Text: item.Text,
        IsActive: item.IsActive,
        Color: item.Color,
        Button: item.Button,
      }))
    );
  };
 
  useEffect(() => {
    getQueryList();
  }, []);
 
  const style = useStyles();
 
  const handleClick = () => {
    window.open("", "_blank");
  };
 
  return (
    <>
      {listItems.map((o: IQUERYLIST, index: number) => {
        if (o.IsActive === "yes") {
          return (
            <section key={o.Id} style={{ marginBottom: "15px" }}>
              <FluentProvider theme={webLightTheme}>
                <Card
                  className={style.card}
                  style={{
                    borderRadius: "7px 7px 7px 7px",
                    borderTop: `7px solid ${o.Color}`,
                  }}
                >
                  <header className={style.flex} style={{ height: "0px" }}>
                    <img src={o.Image} alt={`${o.Title} Image`} />
                  </header>
                  <CardHeader
                    header={<p className={styles.text}>{o.Title}</p>}
                    description={
                      <p className={styles.caption}>{o.Description}</p>
                    }
                  />
                  <footer
                    className={mergeClasses(style.flex, style.cardFooter)}
                  >
                    <button
                      type="button"
                      onClick={handleClick}
                      className={styles.btn}
                    >
                      <span>{o.Text}</span>
                    </button>
                  </footer>
                </Card>
              </FluentProvider>
            </section>
          );
        }
        return null;
      })}
    </>
  );
};
 
export default QueryList;