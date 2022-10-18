# React Typescript

## Creating a react typescript project using create-react-app

```
npx create-react-app ("projectName" or "." if you want to create it within an existing folder) --template typescript
```

## Typing props

When using props we have to initialize what type of value the prop holds:

```
type GreetName = {
    name: string
}

export const Greet = ( props: GreetName ) => {
    return (
        <div>
            <h2>Welcome {props.name}! You have 10 unread messages</h2>
        </div>
    )
}
```

In addition to the "Typing Props" lesson, we explored different prop types and how to initialize them, the code below is initializing a prop that is an array with an object inside ({}[]):

```
type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};
```

## Advanced Props

For this lesson we learned about a union of string literal types, children props, children props where the prop is a react node and optional props:

```
type StatusProps = {
  status: "loading" | "success" | "error";
};
```

```
type HeadingProps = {
  children: string;
};
```

```
type OscarProps = {
  children: React.ReactNode;
};
```

```
type GreetName = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

```

## Event Props

Learned about how to handle onClick and onChange events by declaring the event type:

```
type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
```

```
type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
```

## Styled Props

In order to pass styles as a prop using typescript we have to set the type to be "React.CSSProperties"

```
type ContainerProps = {
  styles: React.CSSProperties;
};
```
