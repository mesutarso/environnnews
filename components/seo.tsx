import Head from 'next/head'

interface ISeo{
    title?: string,
    description?: string;
    title_meta?: string,
    og_title?: string,
    image_article?: string,
    og_url?: string,
    og_description?: string;
    og_secure_url?: string
}

const Seo: React.FC<ISeo> = ({
    title,
    description,
    title_meta,
    og_title,
    image_article,
    og_url,
    og_description,
    og_secure_url
}) => {
    return(
        <>
            <Head>
                <title> {title} </title>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta property="og:title" content={og_title}/>
                <meta property="og:description" content={og_description}/>
                <meta property="og:image" itemProp="image" content={image_article} />
                <meta content="256" property="og:image:height"/>
                <meta content="256" property="og:image:width"/>
                <meta property="og:image:secure_url" content={og_secure_url} />
                <meta property="og:url" content={og_url}/>
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Environews RDC" />
                <meta property="og:updated_time" content="1440432930" />
                <meta name="title" content={title_meta}/>
                <meta name="description" content={description} />
                <meta name="theme-color" content="#1A6309"/>
                <meta name="msapplication-TileColor" content="#1A6309"/>
                <meta name="mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <link rel="apple-touch-icon" href="/images/favicon.png" />
                <link rel="preload" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" as='style'/>
                <link rel="preload" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" as='style'/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap" rel="stylesheet"/>
                <link rel="shortcut icon" href="/images/favicon.jpeg" type="image/x-icon"/>
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/> 
            </Head>
        </>
    )
}

export default Seo