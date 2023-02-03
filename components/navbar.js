import styles from '@/styles/Home.module.css';
import { FiMenu } from 'react-icons/fi'
import { useContext } from 'react'
import AuthContext from '../stores/authContext';
import Link from 'next/link';
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
  } from '@chakra-ui/react'
//   import { Logo } from './Logo'
  
  export const Navbar = () => {
    const {user, login, logout, authReady} = useContext(AuthContext);
    const isDesktop = useBreakpointValue({
      base: false,
      lg: true,
    })
    return (
      <Box
        as="section"
        pb={{
          base: '12',
          md: '24',
        }}
      >
        <Box as="nav" bg="bg-surface" boxShadow="sm">
          <Container
            py={{
              base: '4',
              lg: '5',
            }}
          >
            <HStack spacing="10" justify="space-between">
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="link" spacing="8">
                    {['Home', 'Consulting', 'About', 'Support'].map((item) => (
                        item === 'Home' ? 
                        <Link href="/" key={item}><Button>{item}</Button></Link> :
                        <Link href={item} key={item}><Button>{item}</Button></Link>
                    ))}
                    { authReady && (
                        <>
                            { !user && <Button onClick={ login } colorScheme='blue'>Login/Signup</Button>}
                            {user && <Button style={{marginRight: '15vw'}} onClick={ logout } colorScheme='red'>Logout</Button>}
                            { user && <span className={styles.emailName}>{user.email}</span> }
                        </>
                    )}
                  </ButtonGroup>
                  <HStack spacing="3">
                    {/* { authReady && (
                        <>
                            { !user && <Button onClick={ login } colorScheme='blue'>Login/Signup</Button>}
                            { user && user.email}
                            {user && <Button onClick={ logout } colorScheme='red'>Logout</Button>}
                        </>
                    )} */}
                    {/* <Button variant="ghost">Sign in</Button>
                    <Button variant="ghost">Sign up</Button> */}
                  </HStack>
                </Flex>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              )}
            </HStack>
          </Container>
        </Box>
      </Box>
    )
  }