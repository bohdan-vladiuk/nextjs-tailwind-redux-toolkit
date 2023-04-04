import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "styles/globals.scss";
import { store, persister } from "store";

interface LayoutComponent {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
}

function App({ Component, pageProps }: AppProps) {
  const layoutComponent = Component as LayoutComponent;
  const getLayout = layoutComponent.getLayout ?? ((page: ReactNode) => page);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <ThemeProvider attribute="class">
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
