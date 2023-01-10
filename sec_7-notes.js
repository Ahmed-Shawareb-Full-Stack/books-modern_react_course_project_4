//? ─── Modern React Course - Section 7 - Data Persistance

// Section highlights

/*
1 - create API 
2 - request API
3 - update API >> update local storage
*/

// use json-server as the project server >> (yarn add json-server) >> in package.json >> "server" : "json-server -p 3001 --watch db.json"

// db.json >> project database

// use REST client extension

// use axios to do fetching process
//axios.[operation]([url] , {payload})

//useEffect(()=>{...do something } , []) >>> shape 1 >>> call once when first render
//useEffect(()=>{...do something } ) >>> shape 2 >>> call every time when rerender
//useEffect(()=>{...do something } , [something]) >>> shape 3 >>> call when (something changes)
