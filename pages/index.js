import Head from 'next/head'
import Meta from "../components/Meta";

export default function Home() {
    return (
        <div>
            <Meta title={'Home Page'} keywords={'Home index default page'} />
            <h1>Welcome to home page</h1>
        </div>
    )
}
