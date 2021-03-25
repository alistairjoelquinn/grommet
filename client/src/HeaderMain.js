import { Button, Heading } from "grommet";
import { Chrome } from "grommet-icons";

import AppBar from "./AppBar";

const HeaderMain = ({ showSidebar, setShowSidebar }) => {
    return (
        <AppBar >
            Alistair Quinn
            <Heading level='3' margin='none'>Oratorium</Heading>
            <Button
                icon={<Chrome />}
                onClick={() => setShowSidebar(!showSidebar)}
            />
        </AppBar>
    );
};

export default HeaderMain;