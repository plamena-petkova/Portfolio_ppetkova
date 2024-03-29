import { useCallback } from "react";
import { useContext, useState } from "react";
import { createContext } from "react";


export const NotificationContext = createContext();

export const types = {
    error: 'Error',
    info: 'info',
    warn: 'warn',
    success: 'Success'
}

const initialNotificationState = { show: false, message: '', types: types.success };

export const NotificationProvider = ({children}) => {

    const [notification, setNotification] = useState(initialNotificationState);


    const addNotification = useCallback((message, type = types.success) => {
        setNotification({show: true, message, type})

        setTimeout(() => {
            setNotification(initialNotificationState)
        }, 3000)
    }, []);



    return (
        <NotificationContext.Provider value={{notification, addNotification}}>
            {children}
        </NotificationContext.Provider>
    )
};


export const useNotificationContext = () => {
    const state = useContext(NotificationContext);

    return state;
};