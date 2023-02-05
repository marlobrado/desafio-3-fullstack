import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --color-primary: #FF577F;
        --color-primary-Focus: #FF427F;
        --color-primary-Negative: #59323F;

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;

        --sucess: #3FE864;
        --negative: #E83F5B;
    }
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 100vw;
        height: 100vh;
        background: #868E96;
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
    
    .App {
  text-align: center;
  background-color: --grey-1;
  
}
.divFormulario{
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;

}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}



.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* font-size: calc(10px + 2vmin); */
  color: white;
}

.App-link {
  color: #61dafb;
}

`;