import React from 'react';

/**
 * @description Generic HOC around the desired component
 */
export const withForwardRef = <T extends {}>(
  Component: React.FC<React.PropsWithoutRef<T>>
) =>
  React.forwardRef<React.ReactElement, React.PropsWithoutRef<T>>(
    (props, ref) => <Component {...props} ref={ref} />
  );
