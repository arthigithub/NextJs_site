import "../public/css/bootstrap.css";
import "../public/plugins/revolution/css/settings.css";
import "../public/plugins/revolution/css/layers.css";
import "../public/plugins/revolution/css/navigation.css";
import "../public/css/style.css";
import "../public/css/responsive.css";
import "../public/css/timeline.css";

import { QueryClientProvider, Hydrate, QueryClient } from "react-query";
import { useRef } from "react";
function MyApp({ Component, pageProps }) {
  const queryClient = useRef(new QueryClient());
  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
