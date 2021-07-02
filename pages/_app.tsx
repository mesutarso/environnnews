import type { AppProps } from 'next/app'
import "nprogress/nprogress.css";
import dynamic from 'next/dynamic'
//import { Provider } from 'react-redux'
//import withRedux from "next-redux-wrapper";

const TopProgressBar = dynamic(
    () => {
      return import("../components/top-bar-progress/top_bar_progress");
    },
    { ssr: false },
);

import '../styles/global.scss'
//import store from '../redux/store'

const App = ({ Component, pageProps, router }: AppProps) => {
    return (
        <>
         {/* <Provider store={store}> */}
          <TopProgressBar />
          <Component {...pageProps} key={router.route} />
        {/* </Provider> */}
        </>
    )
}

//const makeStore = () => store;

//export default withRedux(makeStore)(App);

export default App;