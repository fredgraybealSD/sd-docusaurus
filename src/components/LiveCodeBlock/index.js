import React, { useState } from 'react';

function LiveCodeBlock({ code, language }) {
    const [showCode, setShowCode] = useState(false);

    return (
        <div>
            <button onClick={() => setShowCode(!showCode)}>
                {showCode ? 'Hide Code' : 'Show Code'}
            </button>
            {showCode && (
                <pre>
                    <code>{code}</code>
                </pre>
            )}
            {/* Render your React component here */}
        </div>
    );
}
