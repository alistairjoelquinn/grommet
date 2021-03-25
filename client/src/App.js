import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Grommet, Collapsible, ResponsiveContext, Main } from 'grommet';
import { Normalize } from 'styled-normalize';
import styled from "styled-components";

import Typography from './styles/Typography';
import SideBarFieldsBig from "./SideBarFieldsBig";
import MainHomeArea from "./MainHomeArea";
import Footer from "./Footer";
import SideBarFieldsSmall from "./SideBarFieldsSmall";
import HeaderMain from "./HeaderMain";
import Map from "./Map";

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

const ContainerStyles = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-evenly;
    overflow-y: scroll;
`;

export default function App() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            <Normalize />
            <Typography />
            <Grommet theme={theme} full themeMode="dark">
                <BrowserRouter>
                    <ResponsiveContext.Consumer>
                        {size => (
                            <Main>
                                <HeaderMain showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                                <ContainerStyles>
                                    <Route exact path="/" render={MainHomeArea} />
                                    <Route path="/map" render={Map} />
                                    {(!showSidebar || size !== 'small') ? (
                                        <Collapsible direction="horizontal" open={showSidebar}>
                                            <SideBarFieldsBig />
                                        </Collapsible>
                                    ) : (
                                        <SideBarFieldsSmall setShowSidebar={setShowSidebar} />
                                    )}
                                </ContainerStyles>
                                <Footer />
                            </Main>
                        )}
                    </ResponsiveContext.Consumer>
                </BrowserRouter>
            </Grommet >
        </>
    );
}