type ContainerProps = {
  // Typescript has dedicated type for CSS because it could be strings and numbers "React.CSSProperties"
  styles: React.CSSProperties;
};

const Container = (props: ContainerProps) => {
  const { styles } = props;
  return <div style={styles}>Text content goes here</div>;
};

export default Container;
