import { CONFIG } from "@/config";
import "@/styles/index.css";

/**
 * for the config value, You can modify it on src/config/index.ts .
 */
export function App() {
  return (
    <>
      <header>
        <h1>{CONFIG.TITLE}</h1>
      </header>
      <section>

      </section>
      <footer>
        <p>Made by <a href={"https://github.com/" + CONFIG.USERNAME} target="_blank">{CONFIG.AUTHOR} (@{CONFIG.USERNAME})</a> in {CONFIG.YEAR}</p>
      </footer>
    </>
  )
};

