import Link from 'next/link'
import { Navbar } from '../components/navbar';
import styles from '@/styles/Home.module.css';
import {
  Box,
  Button,
  ButtonGroup
} from '@chakra-ui/react';
import { useContext } from 'react'
import AuthContext from '../stores/authContext';

export default function Home() {
const {user, login, logout, authReady} = useContext(AuthContext);
console.log(authReady);
// console.log(login);

  return (
    <>
    <Navbar />
    {/* { authReady && (
      <ul className={styles.logUl}>
        { !user && <li className={styles.logList} onClick={ login }><Button colorScheme='blue'>Login/Signup</Button></li>}
        { user && <li className={styles.logList}>{user.email}</li>}
        {user && <li className={styles.logList} onClick={ logout }><Button colorScheme='red'>Logout</Button></li>}
      </ul>
    )} */}
    <div>
      <Box display='block' border='1px' borderColor='gray.500'>
        Card
      </Box>
    </div>
      
    </>
  )
}
