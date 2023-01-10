//? ─── Modern React Course - Section 8 - context system

// Section highlights

/*
1 - center app logic in one place 
2 - context in react >>> share data between component
*/

// context VS. Redux :

// context >> communication channel to pass data between different components.
// redux >> organize data sharing between components
//  * Setup Context
//  1 - create context
/*
  context >> create context >>> context object {provider , consumer}
  provider >> pass the data to the provider as value
*/

// Provider >>> a super component that will return the context.provider

// provider({children}) >> return >> <context.provider value={valueToShare}>{children}</context.provider>
// children >> the component that is passed to be in the scope of the context
// valueToShare >> an object that will contain the data [values (primitive , reference) , functions]

