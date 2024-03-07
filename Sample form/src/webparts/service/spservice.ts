// import { getSP } from "../form/components/pnpjs-config";

// export const getListItems = async () => {
//     let sp = getSP();
//     return await sp.web.lists.getByTitle("Card").items.getAll().then(res=>{
//         return res
//     }).catch(err=>console.log(err))
// }



// import { addSP } from "../form/components/pnpjs-config";

// import { IItemAddResult } from "@pnp/sp/items";
// export const getListItems = async () => {
//     let sp = addSP();

// const iar: IItemAddResult = await sp.web.lists.getByTitle("Question").items.add({
//     Title: "Title",
//     Description: "Description"
//   });
  
//   console.log(iar);
// }

// spservice.ts
import { addSP } from "../form/components/pnpjs-config";

export const addAnswer = async (answer: string) => {
    try {
      const sp = addSP();
  
    // spservice.ts
return await sp.web.lists.getByTitle("Answer").items.add({
  // Use the correct internal name for the 'Answer' field
  Answer: answer,
}).then(res=>console.log('data submitted')).catch(err=>console.error(err));
  
    } catch (error) {
      console.error("Error adding answer:", error);
      throw error; // Rethrow the error to propagate it to the calling function
    }
  };
  
  export const getQuestions = async () => {
    try {
      const sp = addSP();
    
      const items = await sp.web.lists.getByTitle("Question").items.getAll();
      return items;
    } catch (error) {
      console.error("Error getting questions:", error);
      throw error; // Rethrow the error to propagate it to the calling function
    }
  };
  
