// Initializing the value type of the props status
type StatusProps = {
  // status: string;
  // Having the status set to a string will cause validation issues
  // We could pass any string and typescript would not recognize that the string is invalid
  // To fix this, we do the following:
  status: "loading" | "success" | "error";
};

export const Status = ({ status }: StatusProps) => {
  let message;

  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Data fetched successfully!";
  } else if (status === "error") {
    message = "Error fetching data";
  }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};
