import Head from "next/head";

const CustomHead = ({ title = "Gozie Brain Izuka | Gozkybrain | Gee Brain" }) => {
  const bio = `Gozie Brain Izuka, also known as Gee Brain or Gozkybrain, is an innovative and deadline-driven software developer with over 5 years of experience creating solutions that balance simplicity with impact. He has built projects across fullstack development, Web3 decentralized applications, fintech platforms, AI integrations, and scalable MERN/React applications. He is the founder of the Sarcastic Geeks Trybe, a global tech community focused on collaboration, shared learning, and building creative, geek-inspired projects. 
  You are not just looking at a programmer — you’re meeting someone who turns the entire concept of development into a vibe, because as you know, a normal life is boring.`;

  const siteUrl = "https://geebrain.sarcasticgeeks.com/";
  const imageUrl = `${siteUrl}/gee.jpg`; // Replace with your portfolio’s OG image

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gozie Brain Izuka",
    "alternateName": ["Gozkybrain", "Gee Brain", "Sarcastic Geek"],
    "url": siteUrl,
    "image": imageUrl,
    "jobTitle": "Software Developer, Founder of Sarcastic Geeks Trybe",
    "description": bio,
    "knowsAbout": [
      "Fullstack Development",
      "React",
      "MERN Stack",
      "Web3 dApps",
      "AI and Machine Learning",
      "Fintech",
      "EduTech",
      "Community Lead",
      "Sarcastic Geeks Trybe"
    ],
    "sameAs": [
      "https://github.com/gozkybrain",
      "https://linkedin.com/in/gozkybrain-izuka",
      "https://twitter.com/gozkybrain4u"
    ]
  };

  return (
    <Head>
      {/* Title & Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={bio} />
      <meta
        name="keywords"
        content="Gozie Brain Izuka, Gozkybrain, Gee Brain, Sarcastic Geek, Sarcastic Geeks Trybe, software developer, portfolio, fullstack developer, MERN stack, React, Web3, AI developer, fintech, edutech, community development"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Gozie Brain Izuka (Gozkybrain) – Software Developer" />
      <meta property="og:description" content={bio} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Gozie Brain Izuka (Gozkybrain) – Developer Portfolio" />
      <meta name="twitter:description" content={bio} />
      <meta name="twitter:image" content={imageUrl} />

      {/* JSON-LD Structured Data for AI/SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </Head>
  );
};

export default CustomHead;
