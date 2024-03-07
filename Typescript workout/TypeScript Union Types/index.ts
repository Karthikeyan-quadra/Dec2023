//TypeScript Union Types
//*Union types are used when a value can be more than a single type.
//*Union | (OR)
//*Using the | we are saying our parameter is a string or number:
function sample(x:string|number){
    console.log('status code is:' + x);
}
sample(404);
sample("Not found");