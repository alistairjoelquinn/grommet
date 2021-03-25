import { Box, Button, Card, CardBody, CardFooter, CardHeader, Grid } from "grommet";
import { Favorite, ShareOption } from "grommet-icons";

import cardData from '../data/cardData';

const MainHomeArea = () => {
    return (
        <Box flex align='center' justify='center' gap="4rem" direction="column" height>
            <Box align='center' justify='center' gap="10px" direction="row">
                <Button primary label="Click Me" />
                <Button secondary label="Click Me Next" />
            </Box>
            <Grid
                rows={['xxsmall', 'xsmall']}
                columns={['xsmall', 'small']}
                gap="small"
                areas={[
                    { name: 'header', start: [0, 0], end: [1, 0] },
                    { name: 'nav', start: [0, 1], end: [0, 1] },
                    { name: 'main', start: [1, 1], end: [1, 1] },
                ]}
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