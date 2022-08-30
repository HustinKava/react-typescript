// Initializing the value type of the props status
type StatusProps = {
  status: string;
};

export const Status = (props: StatusProps) => {
  let message;
  // switch (props.status) {
  //   case props.status === "loading":
  //     message = "C";
  //     break;
  //   case props.status === "success":
  //     message = "Data fetched successfully!";
  //     break;
  //   case props.status === "error":
  //     message = "Error fetching data";
  //     break;
  //   default:
  //     message = "Loading...";
  //     break;
  // }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};
