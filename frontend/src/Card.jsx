import { Button, Image, VStack } from '@chakra-ui/react'
import React from 'react'


const Card = ({ amount, img, checkoutHandler }) => {
    return (
        <VStack>
            <Image src={img} boxSize={"64"} objectFit="cover" />
            <Button onClick={() => checkoutHandler(amount)}>Donate</Button>
        </VStack>
    )
}

export default Card