import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

const OAuthButtons = () => {
  return (
    <Flex direction="column" width="100%" mb={4}>
        <Button>Continue with Google</Button>
        <Button>Continue with GitHub</Button>
    </Flex>
  )
}

export default OAuthButtons