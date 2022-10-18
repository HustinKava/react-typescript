// Defining the type of props that are being passed to this component
type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

// Props will take the "PersonProps" variable to be validated and useable
export const Person = ({ name }: PersonProps) => {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};
