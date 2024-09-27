import {useLoaderData} from 'react-router-dom'

const About = () => {

    const {user} = useLoaderData();

    console.log(user);

    return (
        <>
        <p>ABOUT</p>
        </>
    );
}

export default About;

