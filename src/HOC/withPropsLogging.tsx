export const withPropsLogging =
  <T extends unknown>(inner: React.FC<T>): React.FC<T> =>
  (props) => {
    console.log(`${inner.name} props`, props);
    return inner(props);
  };
