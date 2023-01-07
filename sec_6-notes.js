//? ─── Modern React Course - Section 6 - Handle Forms ─────────────────────────────────────────

/*
project components : 

 1 - BookCreate 
 2 - BookList
 3 - BookShow
 4 - BookEdit

*/
// state structure : >> array of object >>> object = {id : number  , title : string}

// decide where to define the state >> when update the state > rerender the component and all the children components
// define the state in the lowest common parent  >>> use lift state up to apply state updates to the common parent

/*
 * update state >> 
  ! state >>> primitive value ?? 
    update state directly no problem 
  ! state >>> reference value ??
    do not update state directly BUT WHY ??

    ? react save a pointer of the state when change happens to the state the pointer stay the same and points to the new state >>> when react try to differentiate between the old state and the new state the pointer will point to the same value so react will not rerender to update the dom
    
*/
