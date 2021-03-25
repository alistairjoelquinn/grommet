import { Anchor, Nav } from "grommet";
import { ChatOption, Home, Notification } from "grommet-icons";

const Footer = () => {
    return (
        <Nav direction="row" background="brand" pad="small" justify="start">
            <Anchor icon={<Home />} hoverIndicator color="dimgrey" href="/" />
            <Anchor icon={<Notification />} hoverIndicator color="dimgrey" />
            <Anchor icon={<ChatOption />} hoverIndicator color="dimgrey" />
        </Nav>
    );
};

export default Footer;