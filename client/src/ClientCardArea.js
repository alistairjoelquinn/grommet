import { Button, Card, CardBody, CardFooter, CardHeader } from "grommet";
import { Favorite, ShareOption } from "grommet-icons";
import styled from "styled-components";

import cardData from '../data/cardData';

const GridStyles = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 200px);
    grid-auto-rows: 200px;
    gap: 2rem;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media (max-width: 730px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 200px);
    }
`;

const ClientCardArea = () => {
    return (
        <GridStyles>
            {cardData.map(card => (
                <div key={card.name}>
                    <Card height="small" width="small" background="light-1" gap="none">
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
                </div>
            ))}
        </GridStyles>
    );
};

export default ClientCardArea;