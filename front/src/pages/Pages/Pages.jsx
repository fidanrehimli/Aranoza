import React from 'react'
import { Helmet } from 'react-helmet'

const Pages = () => {
  return (
    <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Pages</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
    </div>
  )
}

export default Pages