import {createContext, useState, useEffect } from "react";

export const WebsiteThemeContext = createContext({
    theme: 'white',
    setTheme: () => null,
});
export const WebsiteThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('white');
    const value = {theme, setTheme}

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme === "dark") {
            document.body.style.backgroundColor = 'rgb(33, 33, 33)';
            document.body.style.color = 'rgb(255, 255, 255)';
        }
    }, []);
    
    useEffect(() => {
        if (theme === 'dark') {
            document.body.style.backgroundColor = 'rgb(33, 33, 33)';
            document.body.style.color = 'rgb(255, 255, 255)';
            localStorage.setItem("theme", "dark");
        } else {
            document.body.style.backgroundColor = 'rgb(255, 255, 255)';
            document.body.style.color = 'rgb(0, 0, 0)';
            localStorage.setItem("theme", "white");   
        }
    }, [theme]);
    return <WebsiteThemeContext.Provider value={value}>{children}</WebsiteThemeContext.Provider>
}