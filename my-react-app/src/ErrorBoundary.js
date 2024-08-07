import React, { useState, useEffect } from 'react';

function useErrorBoundary() {
  const [error, setError] = useState(null);

  useEffect(() => {
    const errorHandler = (event) => {
      setError(event.error || new Error('Unknown error'));
      event.preventDefault();
    };
    window.addEventListener('error', errorHandler);
    window.addEventListener('unhandledrejection', (event) => {
      setError(event.reason || new Error('Unhandled rejection'));
      event.preventDefault();
    });

    return () => {
      window.removeEventListener('error', errorHandler);
      window.removeEventListener('unhandledrejection', errorHandler);
    };
  }, []);

  return error;
}

const ErrorBoundary = ({ children }) => {
  const error = useErrorBoundary();

  if (error) {
    return (
      <div>
        <h1>Something went wrong.</h1>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {error.toString()}
        </details>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;