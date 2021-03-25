import { Box, Button, Layer } from "grommet";
import { FormClose } from "grommet-icons";

import SideBarFields from "./SideBarFields";

const SideBarFieldsSmall = ({ setShowSidebar }) => {
    return (
        <Layer >
            <Box
                background='light-2'
                tag='header'
                justify='end'
                align='center'
                direction='row'
            >
                <Button
                    icon={<FormClose />}
                    onClick={() => setShowSidebar(false)}
                />
            </Box>
            <Box
                fill
                background='light-2'
                align='center'
                justify='center'
            >
                <SideBarFields />
            </Box>
        </Layer>
    );
};

export default SideBarFieldsSmall;