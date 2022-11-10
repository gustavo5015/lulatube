import React from "react"

export const ColorModeContext = React.createContext({
    mode: "light",
    setMode: () => { alert("Defina o thema primeiro")},
    toggleMode: () => {alert("Defina o thema primeiro")}
})

export default function ColorModeProvider(props) {

const [mode, setMode] = React.useState(props.initialMode);

    function toggleMode() {
        mode === "dark" ? setMode("light") : setMode("dark");
    }

    return (
        <ColorModeContext.Provider value={{mode: mode, setMode: setMode, toggleMode: toggleMode}}>
            {props.children}
        </ColorModeContext.Provider>
    )
}