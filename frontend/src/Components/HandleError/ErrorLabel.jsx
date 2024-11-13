// ErrorLabel.jsx
import React from 'react';
import './ErrorLabel.css';

function ErrorLabel({ errorMessage }) {
    return (
        <div className="error-label">
            {errorMessage}
        </div>
    );
}

export default ErrorLabel;
