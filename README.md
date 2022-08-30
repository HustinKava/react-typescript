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
