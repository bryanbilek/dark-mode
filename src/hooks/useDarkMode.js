import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage(false);

    useEffect(() => {
        if(darkMode === true) {
            return document.body.classList.add('dark-mode');
        } else {
            return document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}