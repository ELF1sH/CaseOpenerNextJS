import Head from "next/head";
import Meta from "../components/Meta";

const About = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Meta title={'About page'} />
            <h1>This is about page</h1>
        </div>
    )
}

export default About