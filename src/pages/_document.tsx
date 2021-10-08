import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Yaldevi:wght@400&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                    <link rel="shortcut icon" href="/favicon.png" />
                    <title>Revision</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
            
        )
    }
}