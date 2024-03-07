import * as React from "react";
import { IPnplistProps } from "./IPnplistProps";
import { useEffect, useState } from "react";
import { getListItems } from "../../service/spservice";

export const Pnplist = (props: IPnplistProps) => {
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await getListItems();
        setList(data);
      } catch (error) {
        console.error("Error fetching list items:", error);
      }
    };

    fetchData();
  }, []);

  console.log(list);

  return (
    <>
      {list.map((item) => (
        <ul key={item.ID}>
          <li>{item.ID}</li>
          <li>{item.Title}</li>
          <li>{item.Description}</li>
          <li>{item.Color}</li>
          <li>{item.Button}</li>
          <li>{item.IsActive}</li>
          <li>
          <img
              src={`https://m365b125021.sharepoint.com/Lists/Card/Attachments/${item.Id}/${JSON.parse(item.Img)?.fileName}`}
              alt="sharepoint image"
              style={{width: "70px", height: "auto", background: "black"}}
            />
          </li>
        </ul>
      ))}
    </>
  );
};

// import * as React from 'react';
// import { IPnplistProps } from './IPnplistProps';
// import { useEffect, useState } from 'react';
// import { getListItems } from '../../service/spservice';
// import { initializePnPjs } from '../components/pnpjs-config';

// export const Pnplist = (props: IPnplistProps) => {
//     const [list, setList] = useState<string[]>([]);

//     useEffect(() => {
//         (async () => {
//             try {
//                 // Initialize PnPjs with SharePoint context
//                 initializePnPjs(props.context);

//                 const res = await getListItems();
//                 setList(res);
//             } catch (error) {
//                 console.log('Error fetching list items:', error);
//             }
//         })();
//     }, []);

//     return (
//         <ul>
//             {list.map((item, index) => (
//                 <li key={index}>{item}</li>
//             ))}
//         </ul>
//     );
// };
