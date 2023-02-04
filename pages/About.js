import { useEffect, useContext, useState } from 'react';
import AuthContext from '../stores/authContext';
import { Navbar } from '../components/navbar';
import { Heading } from '@chakra-ui/react';

const About = () => {
    const { user, authReady } = useContext(AuthContext);
    const [testVar, setTestVar] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(authReady)
        if (authReady) {
        fetch('/.netlify/functions/loggedIn', user && {
            headers: {
                Authorization: 'Bearer ' + user.token.access_token
            }
        })
        .then(res => {
            if (!res.ok) {
                throw Error('You must be logged in to view this content.')
            }

            return res.json();
        })
        .then(data => {
            setTestVar(data);
            setError(null);
        })
        .catch((err) => {
            setError(err.message);
            setTestVar(null);
        })
        }
    },[user, authReady]);

    return ( 
        <>
            <Navbar />
            {!authReady && <div>Loading...</div>}

            {error && (
                <div>
                    <p>{ error }</p>
                </div>
            )}

            {testVar && testVar.map(tVar => (
                <div key={tVar.id}>
                    <Heading>{tVar.title}</Heading>
                    <h4>Written by {tVar.author}</h4>
                    <p>
                        Officia labore ex ut veniam. Ut in Lorem ipsum mollit nulla incididunt et in fugiat. Cillum sit commodo occaecat nisi adipisicing enim quis irure. Amet duis officia eiusmod adipisicing ad fugiat eiusmod et pariatur. Magna ea aute exercitation elit quis.
                        Ut sit cupidatat cupidatat nulla consequat consectetur cupidatat ad pariatur ullamco proident. Eu ex fugiat est mollit eiusmod ut est velit eu officia dolore exercitation laboris sit. Culpa sit et ut occaecat excepteur. Occaecat ullamco aliqua et aliqua. Eu enim officia consequat est ullamco ullamco duis duis.
                        Quis irure sit eiusmod officia commodo fugiat laboris reprehenderit sint ad. Quis do velit nostrud est voluptate aliqua cillum et irure mollit anim enim deserunt aliquip. Elit sint est aliqua veniam voluptate excepteur. Incididunt exercitation eu reprehenderit commodo commodo pariatur ex duis labore eiusmod culpa consectetur. Anim do cillum sint incididunt. Ullamco veniam cillum excepteur occaecat ex reprehenderit pariatur irure. Esse labore officia ut nisi sit.
                    </p>
                </div>
            ))}
            {/* <Heading>About</Heading>
            <div>
                <p>
                    Officia labore ex ut veniam. Ut in Lorem ipsum mollit nulla incididunt et in fugiat. Cillum sit commodo occaecat nisi adipisicing enim quis irure. Amet duis officia eiusmod adipisicing ad fugiat eiusmod et pariatur. Magna ea aute exercitation elit quis.
                    Ut sit cupidatat cupidatat nulla consequat consectetur cupidatat ad pariatur ullamco proident. Eu ex fugiat est mollit eiusmod ut est velit eu officia dolore exercitation laboris sit. Culpa sit et ut occaecat excepteur. Occaecat ullamco aliqua et aliqua. Eu enim officia consequat est ullamco ullamco duis duis.
                    Quis irure sit eiusmod officia commodo fugiat laboris reprehenderit sint ad. Quis do velit nostrud est voluptate aliqua cillum et irure mollit anim enim deserunt aliquip. Elit sint est aliqua veniam voluptate excepteur. Incididunt exercitation eu reprehenderit commodo commodo pariatur ex duis labore eiusmod culpa consectetur. Anim do cillum sint incididunt. Ullamco veniam cillum excepteur occaecat ex reprehenderit pariatur irure. Esse labore officia ut nisi sit.
                </p>
            </div> */}
        </>
     );
}
 
export default About;