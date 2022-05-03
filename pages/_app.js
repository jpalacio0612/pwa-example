import { useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setState(e);
    });
  }, []);

  function handleInstall() {
    if (state) {
      state.prompt();
      state.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("Installed");
        } else {
          console.log("No Installed");
        }
      });
    }
  }

  return (
    <div>
      <button onClick={handleInstall}>Install</button>
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
