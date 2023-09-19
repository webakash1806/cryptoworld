import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from './useDarkMode'

function DarkModeToggle() {
    const [colorTheme, setTheme] = useDarkMode();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <DarkModeSwitch
                className="duration-[0.3s]"
                checked={darkSide}
                onChange={toggleDarkMode}
                size={25}
                color="#fff"
            />
        </>
    );
}

export default DarkModeToggle