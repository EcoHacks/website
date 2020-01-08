import Head from 'next/head'

export default ({
  title = 'EcoHacks - Changing the environment!',
  description = 'A high school hackathon focusing on the environmental issues of today, one line of code at a time.',
  image = 'https://ecohacks.io/static/banner-dark.png',
  url = 'https://ecohacks.io'
}) => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="EcoHacks" />
    <meta name="twitter:site" content="@angelhacks_la" />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={image} />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'ecohacks',
          url: 'https://ecohacks.io',
          logo: 'https://ecohacks.io/logo_inverted.png',
          sameAs: [
            //socials
          ],
          contactPoint: [
            {
              '@type': 'ContactPoint',
              email: 'team@ecohacks.io',
              contactType: 'customer support',
              url: 'https://ecohacks.io'
            }
          ]
        })
      }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'http://schema.org/',
          '@type': 'Event',
          name: 'EcoHacks',
          startDate: '2019-10-26T9:00',
          endDate: '2019-10-26T21:00',
          description: 'Welcome to Ecohacks!',
          isAccessibleForFree: true,
          url: 'https://ecohacks.io',
          image: 'https://ecohacks.io/static/logo-inverted.png',
          sponsor: {
            '@type': 'Organization',
            name: 'Hack Club',
            url: 'https://hackclub.com'
          },
          offers: {
            '@type': 'Offer',
            name: 'Free Admission',
            url: 'https://ecohacks.io',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            validFrom: '2019-04-01',
            validThrough: '2019-06-22'
          },
          performer: {
            '@type': 'PerformingGroup',
            name: 'People All Around the World'
          }
        })
      }}
    />
  </Head>
)
