import { Greet } from "../components/typingprops/Greet";
import { Person } from "../components/typingprops/Person";
import { PersonList } from "../components/typingprops/PersonList";

// Creating person name that will be passed to the "Person" component
const personName = {
  first: "Bruce",
  last: "Wayne",
};

// Creating an array of names that will to the "PersonList" component
const nameList = [
  {
    first: "Bruce",
    last: "Wayne",
  },
  {
    first: "Clark",
    last: "Kent",
  },
  {
    first: "Princess",
    last: "Diana",
  },
];

function TypingProps() {
  return (
    <div>
      {/* Rendering our components and passing props to them */}
      <Greet name="Hustin" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default TypingProps;
