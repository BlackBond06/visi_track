import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react';
import {useSignInWithGoogle} from "react-firebase-hooks/auth";
import {auth} from "../../../firebase/clientApp";

const OAuthButtons = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex direction="column" width="100%" mb={4}>
        <Button variant="oauth" mb={2} isLoading={loading} onClick={()=> signInWithGoogle()}>
            <Image src="/Assets/googlelogo.png" height="20px" mr={4}/>
            Continue with Google
        </Button>
        <Button variant="oauth">Continue with GitHub</Button>
        {error && <Text>{error?.message}</Text>}
    </Flex>
  )
}

export default OAuthButtons