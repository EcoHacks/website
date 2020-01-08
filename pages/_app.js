import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/core'
import Meta from '../components/meta'
import Layout from '../components/layout'
import theme from '../components/theme'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Meta />
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:400,700,900"
            rel="stylesheet"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <Global
            styles={theme => ({
              body: {
                fontFamily: theme.fonts.body,
                lineHeight: theme.lineHeights.body,
                fontWeight: theme.fontWeights.body,
                color: theme.colors.text,
                backgroundColor: theme.colors.background,
                margin: 0,
                minHeight: '100vh'
              },
              '*': {
                boxSizing: 'border-box'
              }
            })}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    )
  }
}
