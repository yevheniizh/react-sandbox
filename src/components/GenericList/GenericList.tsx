export const GenericList = <T extends unknown>({
  data,
  renderItem,
}: {
  data: Array<T>;
  renderItem: React.FC<T>;
}) => <>{data.map(renderItem)}</>;
