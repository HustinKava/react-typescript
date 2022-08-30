// We have to define what the prop types are to be able to use them
type GreetName = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

// Props has to have the value of the "GreetName" variable to be validated and useable
export const Greet = (props: GreetName) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h2>
          Welcome {props.name}! You have {props.messageCount} unread messages
        </h2>
      ) : (
        <h2>Welcome Guest</h2>
      )}
    </div>
  );
};
