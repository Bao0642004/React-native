import { useState, createContext } from "react";
import SAMPLE_DATA from "../../Data.smaple";

const DataContext = createContext();
export const DataProider =() => {
    const [list,setList] = useState(SAMPLE_DATA);

    return (
        <DataContext.Provider value={{list, setList}}>
            {children}
        </DataContext.Provider>
    );
}