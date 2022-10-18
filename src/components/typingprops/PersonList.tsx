// Defining that the props being received is an array with an object inside: {}[]
type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((name, index) => {
        return (
          <h2 key={index}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
