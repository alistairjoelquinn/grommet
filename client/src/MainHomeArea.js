import { Box, Button, Card, CardBody, CardFooter, CardHeader, Grid } from "grommet";
import { Favorite, ShareOption } from "grommet-icons";

import cardData from '../data/cardData';

const MainHomeArea = () => {
    return (
        <Box flex align='center' justify='evenly' direction="column">
            <Box align='center' justify='center' gap="10px" direction="row">
                <Button primary label="Click Me" />
                <Button secondary label="Click Me Next" />
            </Box>
            <Grid
                rows={["small", "small"]}
                columns={["small", "small", "small"]}
                gap="3vw"
                width="100%"
            >
                {cardData.map(card => (
                    <Card key={card.name} height="small" width="small" background="light-1" gap="none">
                        <CardHeader pad="20px">{card.name}</CardHeader>
                        <CardBody pad="20px" style={{ fontSize: '0.8rem', paddingTop: '0' }}>{card.job}</CardBody>
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
                ))}
            </Grid>
        </Box >
    );
};

export default MainHomeArea;