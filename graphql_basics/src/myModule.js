// named export - has a name, as many as needed
// default export - has no name, and can only have one

const message = "hello world!";
const location = "edmonton";

const getGreeting = (name) => {
    return `Welcome ${name}`
}
export {
    message,
    getGreeting,
    location as default
}

