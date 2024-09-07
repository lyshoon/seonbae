import { Box, Heading, Button, Stack, Input, InputGroup, InputLeftAddon, InputRightElement} from "@chakra-ui/react";
import React from "react";


function SignUp(){

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Box mt='20px'> 
            <Heading textAlign='center' mb= '20px'> Sign Up </Heading>
            <Stack spacing={3}>
            <InputGroup>
                <InputLeftAddon w='120px'>Email</InputLeftAddon>
                <Input placeholder='abcd@gmail.com' />
            </InputGroup>

            <InputGroup size='md'>
            <InputLeftAddon w='120px'>Password</InputLeftAddon>
            <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'A' : 'B'}
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Button colorScheme='blue'>Button</Button>
            </Stack>
        </Box>
    );
}

export default SignUp