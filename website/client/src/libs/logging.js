import Vue from 'vue';

/* eslint-disable no-console */
export function setUpLogging () { // eslint-disable-line import/prefer-default-export
  window.onerror = function windowOnError (message, source, lineno, colno, error) {
    console.error('Unhandled error JS code.');
    console.error('Message:', message);
    console.error('Source:', source);
    console.error('Line:', lineno, 'Column:', colno);
    console.error('Error;', error);
  };

  const _LTracker = window._LTracker || [];

  window.onunhandledrejection = event => {
    console.error(`Unhandled promise rejection: ${event.reason}`);
    console.error('Full info:', event);
    _LTracker.push({
      event,
    });
  };

  Vue.config.errorHandler = (err, vm, info) => {
    console.error('Unhandled error in Vue.js code.');
    console.error('Error:', err);
    console.error('Component where it occurred:', vm);
    console.error('Info:', info);

    _LTracker.push({
      err,
      info,
    });
  };
}
/* eslint-enable no-console */
