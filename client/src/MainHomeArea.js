import { Box, Button } from "grommet";
import styled from "styled-components";

import ClientCardArea from "./ClientCardArea";

const MainAreaStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    flex: 1;
    margin-bottom: 2rem;
`;

const MainHomeArea = () => {
    return (
        <MainAreaStyles>
            <Box align='center' justify='center' gap="10px" direction="row">
                <Button primary label="Click Me" />
                <Button secondary label="Click Me Next" />
            </Box>
            <ClientCardArea />
        </MainAreaStyles>
    );
};

export default MainHomeArea;