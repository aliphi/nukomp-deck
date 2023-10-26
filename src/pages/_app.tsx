import { useRef } from 'react'
import Context from '../context/context'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import '@/styles/index.css'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '@/components/Fonts'
import customTheme from '../../utils/theme'
import 'regenerator-runtime/runtime'

export default function App({ Component, pageProps = { title: 'index' } }) {
  const ref = useRef()

  return (
    <>
      <ChakraProvider theme={customTheme}>
        <Fonts />
        <Header title={pageProps.title} />
        <Context>
          <Layout ref={ref}>
            <Component {...pageProps} />
          </Layout>{' '}
        </Context>
      </ChakraProvider>
    </>
  )
}
