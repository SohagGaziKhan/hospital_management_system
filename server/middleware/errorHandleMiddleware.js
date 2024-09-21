export const errorHandleMiddleware = (errorfuncion) => {
  return (req, res, next) => {
    Promise.resolve(errorfuncion(req, res, next)).catch(next);
  };
};
