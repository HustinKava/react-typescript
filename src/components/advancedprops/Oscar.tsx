// What is the type of a react component?
// "React.ReactNode" is a type provided by the react package
// In "AdvancedProps.tsx" we are rendering the "Heading" component as a child of the "Oscar" component
type OscarProps = {
  children: React.ReactNode;
};

export const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};
