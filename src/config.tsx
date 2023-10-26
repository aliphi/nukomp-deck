import Head from 'next/head'

const titleDefault = 'Nullsight'
const url = 'https://react-three-next.vercel.app/'
const description = 'The easiest and fastest way to create a 3D website using React Three Fiber and NextJS'
const author = 'Author'

export default function Header({ title = titleDefault }) {
  return (
    <Head>
    <meta content="en" httpEquiv="Content-Language" />
    <meta charSet="UTF-8" />
    <title>NULLSIGHT</title>
    <meta name="title" content="NULLSIGHT" />
    <meta name="description" content="Techno-logical Sub-cult." />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="color-scheme" content="dark only" />
    <meta
      name="keywords"
      content="mediaartist,media artist,media_artist,newmediaartist,new media artist,new_media_artist,mediaart,
    media art,media arts,media_arts,newmediaart,new media art,new media arts,new_media_arts,videomapping,video_mapping,interactive,installation,interactiveinstallation,
    interactive installation,interactive_installation,immersiveenvironment,immersive environment,interactivedesign,interactive design,interactive_design,interactive media,interactivemedia,interactive_media,physical modeling,physicalmodeling,
    physical_modeling,digital fabrication,digitalfabrication,digital_fabrication,Arduino,audiovisual,audio visual,audio_visual,performance,audiovisual_performance,audiovisualperformance,electronic music,electronicmusic,electronic_music,
    tadaex,digitalart,digital_art,digital art, toronto, canada, ontario, agency, art"
    />

    {/* <!-- Twitter --> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://nullsight.com" />
    <meta name="twitter:site" content="@nullsight" />
    <meta name="twitter:title" content="NULLSIGHT" />
    <meta name="twitter:description" content="Techno-logical Sub-cult." />
    <meta name="twitter:image" content="metatwi.jpg" />
    <meta name="twitter:image:type" content="image/jpg" />
    <meta name="twitter:image:width" content="800" />
    <meta name="twitter:image:height" content="418" />

    {/* <!-- Open Graph / Facebook --> */}
    <meta property="og:url" content="https://nullsight.com" />
    <meta property="og:title" content="NULLSIGHT" />
    <meta property="og:description" content="Techno-logical Sub-cult." />
    <meta property="og:image" content="metagen.jpg" />

    <link
      rel="shortcut icon"
      href="/icons/favicon.ico"
      type="image/x-icon"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/icons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/icons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/icons/favicon-16x16.png"
    />
    <link
      rel="mask-icon"
      href="/icons/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <meta name="msapplication-TileColor" content="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
  )
}
