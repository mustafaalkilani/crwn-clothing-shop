import { useContext } from 'react';

import { WebsiteThemeContext } from '../context/theme-color.context';

import {Loader, LoaderContainer} from './loader-spinner.style';

const LoaderSpinner = () => {
    const {theme} = useContext(WebsiteThemeContext);
    return (
        <LoaderContainer>
            <Loader style={{'borderBottom': theme === 'dark' ? '4px solid rgb(255, 255, 255)': '4px solid rgb(1, 20, 33)', 'borderTop': theme === 'dark' ? '4px solid rgb(255, 255, 255)': '4px solid rgb(1, 20, 33)'}}></Loader>
        </LoaderContainer>
    );
}

export default LoaderSpinner;