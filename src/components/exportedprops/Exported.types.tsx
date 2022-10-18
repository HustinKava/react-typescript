export type GreetName = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export type HeadingProps = {
  children: string;
};

export type OscarProps = {
  children: React.ReactNode;
};

export type StatusProps = {
  status: "loading" | "success" | "error";
};
