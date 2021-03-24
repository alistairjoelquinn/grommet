import { Box, Button, Card, CardBody, CardFooter, CardHeader } from "grommet";
import { Favorite, ShareOption } from "grommet-icons";

const MainHomeArea = () => {
    return (
        <Box flex align='center' justify='center' gap="10px" direction="column">
            <Box flex align='center' justify='center' gap="10px" direction="row">
                <Button primary label="Click Me" />
                <Button secondary label="Click Me Next" />
            </Box>
            <Card height="small" width="small" background="light-1">
                <CardHeader pad="medium">Header</CardHeader>
                <CardBody pad="medium">Body</CardBody>
                <CardFooter pad={{ horizontal: "small" }} background="light-2">
                    <Button
                        icon={<Favorite color="red" />}
                        hoverIndicator
                    />
                    <Button icon={<ShareOption color="plain" />} hoverIndicator />
                </CardFooter>
            </Card>
        </Box>
    );
};

export default MainHomeArea;