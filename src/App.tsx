import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';
import { ReactComponent as TypescriptLogo } from './assets/typescript.svg';
import { ReactComponent as ScssLogo } from './assets/scss.svg';
import styles from './App.module.scss';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <h1>Hello From New Jersey!</h1>
            <form>
                <label>First name:</label>
                <br />
                <input type="text" />
                <br />
                <label>Last name:</label>
                <br />
                <input type="text" />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default App;
