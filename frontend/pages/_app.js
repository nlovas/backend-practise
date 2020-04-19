/*import global styles here. These styles will be used throughout the app*/
import * as React from "react";
import "../styles/global-styles.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
