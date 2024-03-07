// import { getSP } from "../pnplist/components/pnpjs-config";

// let sp = getSP()
// export const getListItems=async()=>{

//     return await sp.web.lists.getByTitle("Card").items();
// }

import { getSP } from "../pnplist/components/pnpjs-config";


export const getListItems = async () => {
    let sp = getSP();
    return await sp.web.lists.getByTitle("Card").items.getAll().then(res=>{
        return res
    }).catch(err=>console.log(err))
}
