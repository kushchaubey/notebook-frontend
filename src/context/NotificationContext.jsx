import {toast } from 'react-toastify';

import {createContext } from "react";

export const  NotificationContext = createContext(null);

export function NotificationProvider({children}){

 const notification = (message, typeOfMessage)=>{
    toast(message);
 }

    return(
        <NotificationContext.Provider value={notification}>
            {children}
        </NotificationContext.Provider>
    )
}

 