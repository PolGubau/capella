import Head from 'next/head'

import Link from 'next/link'



export default function Timeline({userName='Anna'}) {


    return (<>
        <Head>
            <title>Capella Timeline</title>
            <meta name="description" content="Share your soubts" />
            <link rel="icon" href="/favicon.ico" />
        </Head>




        <Link href="/">Home</Link>
        <h1>This is the Timeline from {userName}</h1>

        <style jsx>{`h1{color:red}`}</style>

    </>)
}

Timeline.getInitialProps =()=>{
    return fetch('http://localhost:3000/api/hello')
    .then(res=>res.json())
    .then(response=>{
        const {userName}=response
        return{userName}
    })
}