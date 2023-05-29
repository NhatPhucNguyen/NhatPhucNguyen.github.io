import { createContext} from "react";
//To change the background of nav link
export const PageContext = createContext({
    getPage: (page:string) => {console.log(page)},
    page: "",
});
