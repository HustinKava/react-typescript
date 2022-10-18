// Initializing a type that accepts children to be passed through as a string
// We are passing a string in "AdvancedProps.tsx"
type HeadingProps = {
  children: string;
};

export const Heading = (props: HeadingProps) => {
  const { children } = props;
  return <h2>{children}</h2>;
};
