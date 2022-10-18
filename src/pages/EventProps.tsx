import Button from "../components/eventprops/Button";
import Input from "../components/eventprops/Input";

function EventProps() {
  return (
    <div>
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => console.log(event.target.value)}
      />
    </div>
  );
}

export default EventProps;
