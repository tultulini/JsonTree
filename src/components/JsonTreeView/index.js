import React, { useState } from 'react';
import JSONTree from 'react-json-tree'

const theme = {
    scheme: 'monokai',
    author: 'wimer hazenberg (http://www.monokai.nl)',
    base00: '#272822',
    base01: '#383830',
    base02: '#49483e',
    base03: '#75715e',
    base04: '#a59f85',
    base05: '#f8f8f2',
    base06: '#f5f4f1',
    base07: '#f9f8f5',
    base08: '#f92672',
    base09: '#fd971f',
    base0A: '#f4bf75',
    base0B: '#a6e22e',
    base0C: '#a1efe4',
    base0D: '#66d9ef',
    base0E: '#ae81ff',
    base0F: '#cc6633',
};
var sampleJson = { "sampleProperty": [{ "a": 0, "b": "aaaa" }] }
const JsonTreeView = () => {
    const [jsonText, setJsonText] = useState(JSON.stringify(sampleJson, null, '\t'))
    const [json, setJson] = useState(sampleJson)
    const textAreaChanged = (e) => {
        const val = e.target.value;
        setJsonText()
        try {

            setJson(JSON.parse(val))
        }
        catch (ex) {

        }
    }
    // If you're using Immutable.js: `npm i --save immutable`
    // import { Map } from 'immutable'

    // Inside a React component:

    return <div style={{textAlign:'left', margin:'20px'}}>
        <textarea value={jsonText} cols={256} rows={50} onChange={textAreaChanged} />
        <JSONTree data={json} theme={{
            extend: theme,
            // underline keys for literal values
            valueLabel: {
                textDecoration: 'underline',
            },
            // switch key for objects to uppercase when object is expanded.
            // `nestedNodeLabel` receives additional argument `expandable`
            nestedNodeLabel: ({ style }, keyPath, nodeType, expanded) => ({
                style: {
                    ...style,
                    textTransform: expanded ? 'uppercase' : style.textTransform,
                },
            }),
        }} />
    </div>
}

export default JsonTreeView