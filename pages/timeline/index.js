import Head from 'next/head'

import Link from 'next/link'



export default function Timeline() {


    return (<>
        <Head>
            <title>Capella Timeline</title>
            <meta name="description" content="Share your soubts" />
            <link rel="icon" href="/favicon.ico" />
        </Head>




        <Link href="/">Home</Link>
        <h1>This is Timeline</h1>

        <style jsx>{`h1{color:red}`}</style>

    </>)
}