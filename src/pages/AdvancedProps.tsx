import { Greet } from "../components/advancedprops/Greet";
import { Heading } from "../components/advancedprops/Heading";
import { Oscar } from "../components/advancedprops/Oscar";
import { Status } from "../components/advancedprops/Status";

function AdvancedProps() {
  return (
    <div>
      <Status status="loading" />
      {/* This would throw an error as "test" is not accepted */}
      {/* <Status status="test" /> */}

      {/* The "Placeholder Text" value is the children of the "Heading component" */}
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>

      {/* Originally the prop type for the "Greet" component takes in 3 props */}
      {/* The "name", "messageCount" and "isLoggedIn" */}
      {/* However we have set the "messageCount" to be optional in the "Greet" component */}
      <Greet name="Hustin" isLoggedIn={true} />
    </div>
  );
}

export default AdvancedProps;
