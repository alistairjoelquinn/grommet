import { Box, Button, Card, CardBody, CardFooter, CardHeader } from "grommet";
import { Favorite, ShareOption } from "grommet-icons";

const MainHomeArea = () => {
    return (
        <Box flex align='center' justify='center' gap="4rem" direction="column" height>
            <Box align='center' justify='center' gap="10px" direction="row">
                <Button primary label="Click Me" />
                <Button secondary label="Click Me Next" />
            </Box>
            <Card height="small" width="small" background="light-1" gap="none">
                <CardHeader pad="20px">Alistair Quinn</CardHeader>
                <CardBody pad="20px" style={{ fontSize: '0.8rem', paddingTop: '0' }}>Professional Web Development Services</CardBody>
                <CardFooter pad={{ horizontal: "small" }} background="light-2">
                    <Button
                        icon={<Favorite color="red" />}
                        hoverIndicator
                    />
                    <Button
                        icon={<ShareOption color="plain" />}
                        hoverIndicator
                    />
                </CardFooter>
            </Card>
        </Box >
    );
};

export default MainHomeArea;