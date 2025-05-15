// Helper function to polyfill Promise.withResolvers if not available
export function applyPolyfill() {
  if (typeof Promise.withResolvers !== 'function') {
    Promise.withResolvers = function () {
      let resolve!: (value: unknown) => void;
      let reject!: (reason?: any) => void;
      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
      return { promise, resolve, reject };
    };
  }
}
