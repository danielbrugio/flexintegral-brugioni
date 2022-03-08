
import { useState, createContext, useContext } from "react"

const Notification = ({ message, severity }) => {
    const notificationStyles = {
        position: 'absolute',
        top: 100,
        right: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: 'auto',
        padding: '10px 20px 10px 20px',
        color: 'white',
        borderRadius: '10px',
        backgroundColor: severity === 'success' ? 'green' : 'red'
    }

    const config = true ?
    {
        style: notificationStyles,
    } : {}

    if(message === '') {
        return null
    }
    
    return (
        <div {...config}>
            {message}
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationServicesProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('')

    const setNotification = (severity, message) => {
        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage('')
        }, 5000)
    }

    return (
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificationServices = () => {
    return useContext(NotificationContext)
}