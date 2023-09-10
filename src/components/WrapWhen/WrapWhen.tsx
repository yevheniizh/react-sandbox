import React from 'react';

interface IWrapWhenProps {
  condition: boolean;
  wrap: (children: React.ReactElement) => JSX.Element;
  children: React.ReactElement;
}

export const WrapWhen = ({ condition, wrap, children }: IWrapWhenProps) =>
  condition ? wrap(children) : <>{children}</>;
