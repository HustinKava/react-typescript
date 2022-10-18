// We have to define what the prop types are to be able to use them
type GreetName = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

// Props has to have the value of the "GreetName" variable to be validated and useable
export const Greet = ({ name, messageCount, isLoggedIn }: GreetName) => {
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
