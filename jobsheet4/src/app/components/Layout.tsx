import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: any) {

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}