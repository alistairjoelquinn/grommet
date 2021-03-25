import { useState } from "react";
import { Box, Grommet, Collapsible, ResponsiveContext } from 'grommet';
import { Normalize } from 'styled-normalize';

import Typography from './styles/Typography';
import SideBarFieldsBig from "./SideBarFieldsBig";
import MainHomeArea from "./MainHomeArea";
import Footer from "./Footer";
import SideBarFieldsSmall from "./SideBarFieldsSmall";
import HeaderMain from "./HeaderMain";

const theme = {
    global: {
        colors: {
            brand: '#EAF4D3',
            focus: '#FFDF64',
        },
        font: {
            family: 'RobotoMono',
            size: '18px',
            height: '20px',
        },
    },
};

export default function App() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            <Normalize />
            <Typography />
            <Grommet theme={theme} full themeMode="dark">
                <ResponsiveContext.Consumer>
                    {size => (
                        <Box fill>
                            <HeaderMain showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                                <MainHomeArea />
                                {(!showSidebar || size !== 'small') ? (
                                    <Collapsible direction="horizontal" open={showSidebar}>
                                        <SideBarFieldsBig />
                                    </Collapsible>
                                ) : (
                                    <SideBarFieldsSmall setShowSidebar={setShowSidebar} />
                                )}
                            </Box>
                            <Footer />
                        </Box>
                    )}
                </ResponsiveContext.Consumer>
            </Grommet >
        </>
    );
}