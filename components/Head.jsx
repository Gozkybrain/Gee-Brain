import Head from 'next/head';

const CustomHead = ({ title = 'Sarcastic Geek' }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Sarcastic Geek is an amazing software developer that like to make complex stuff as easy as possible. Are you a member of the Sarcastic Geeks Trybe?"
      />
      <meta
        name="keywords"
        content="Sarcastic Geek, Gozkybrain, Gee Brain, Software developer with react, Bukas Global Investments, Sarcastic Geeks Academy, mern stack, Gozie Brain Izuka, vscode-portfolio"
      />
      <meta property="og:title" content="Sarcastic Geek's Portfolio" />
      <meta
        property="og:description"
        content="A normal life is Boring."
      />
      <meta property="og:url" content="https://sarcastic-geek.netlify.app" />
    </Head>
  );
};

export default CustomHead;
