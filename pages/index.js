import Link from 'next/link'
import styles from '@/styles/Home.module.css';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  ButtonGroup
} from '@chakra-ui/react';
import { useContext } from 'react'
import AuthContext from '../stores/authContext';

export default function Home() {
const {user, login, logout, authReady} = useContext(AuthContext);
console.log(user);
// console.log(login);

  return (
    <>
    { authReady && (
      <ul className={styles.logUl}>
        { !user && <li className={styles.logList} onClick={ login }><Button colorScheme='blue'>Login/Signup</Button></li>}
        { user && <li className={styles.logList}>{user.email}</li>}
        {user && <li className={styles.logList} onClick={ logout }><Button colorScheme='red'>Logout</Button></li>}
      </ul>
    )}
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton className={styles.boxColor}>
              <Box as="span" flex='1' textAlign='left'>
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}
