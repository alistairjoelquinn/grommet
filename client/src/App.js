import { useState } from "react";
import { Box, Grommet, Collapsible, ResponsiveContext, Main } from 'grommet';
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
                        <Main>
                            <HeaderMain showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                            <Box fill overflow="scroll">
                                <Box direction='row' flex>
                                    <MainHomeArea />
                                    {(!showSidebar || size !== 'small') ? (
                                        <Collapsible direction="horizontal" open={showSidebar}>
                                            <SideBarFieldsBig />
                                        </Collapsible>
                                    ) : (
                                        <SideBarFieldsSmall setShowSidebar={setShowSidebar} />
                                    )}
                                </Box>
                            </Box>
                            <Footer />
                        </Main>
                    )}
                </ResponsiveContext.Consumer>
            </Grommet >
        </>
    );
}