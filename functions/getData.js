exports.handler = async () => {
    console.log("The function ran!");

    const data = { name: 'Mario', age: 35, job: 'plumber' };

    // return a response to the browser
    return{
        statusCode: 200,
        body: JSON.stringify(data)
    }
}