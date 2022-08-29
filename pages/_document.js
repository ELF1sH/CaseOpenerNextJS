import Document, { Html, Head, Main, NextScript } from 'next/document'

// default document structure (there was no reason to create this file since I haven't changed anything)
// basically it just gives us access to <html> and <body> tags
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument