import { Button, Card, CardBody, CardFooter, CardHeader, Grid, ResponsiveContext } from "grommet";
import { Favorite, ShareOption } from "grommet-icons";

import cardData from '../data/cardData';

const ClientCardArea = () => {
    return (
        <ResponsiveContext.Consumer>
            {size => (
                <Grid
                    rows={size !== "small" ? ["small", "small"] : ["small", "small", "small"]}
                    columns={size !== "small" ? ["small", "small", "small"] : ["small", "small"]}
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
            )}
        </ResponsiveContext.Consumer>
    );
};

export default ClientCardArea;