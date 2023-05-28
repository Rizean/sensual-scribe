import React, {ChangeEvent} from 'react';
import './App.css';
import {PaperDollDemo} from "./paperDoll/demo";

function App() {
    const [demo, setDemo] = React.useState('paperDoll');

    let DemoComponent = PaperDollDemo;
    if (demo === 'paperDoll') {
        DemoComponent = PaperDollDemo;
    }

    const handleDemoChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setDemo(event.target.value);
    }

    return (
        <div className="SensualScriptExamples">
            <header className="sensual-script-examples-header">
                <p>Sensual Script Examples</p>
                <select onChange={handleDemoChange} value={demo} style={{position: 'absolute', right: '10px', top: '10px'}}>
                    <option value="paperDoll">Paper Doll Demo</option>
                    {/* Add more options here as you create more demos */}
                </select>
            </header>
            <DemoComponent/>
        </div>
    );
}

export default App;
