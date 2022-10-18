// We have to define what the prop types are to be able to use them
type GreetName = {
  name: string;
  // The "messageCount" has a "?" next to it to indicate that this is an optional type
  messageCount?: number;
  isLoggedIn: boolean;
};

// Props has to have the value of the "GreetName" variable to be validated and useable
// We can destructure the "messageCount" and assign it a default value of 0
export const Greet = ({ name, isLoggedIn, messageCount = 0 }: GreetName) => {
  return (
    <div>
      {isLoggedIn ? (
        <h2>
          Welcome {name}! You have {messageCount} unread messages
        </h2>
      ) : (
        <h2>Welcome Guest</h2>
      )}
    </div>
  );
};
