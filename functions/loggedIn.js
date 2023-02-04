exports.handler = async (event, context) => {
    const someDataToTest = [
        {title: 'Testing This', author: 'The tester', id: 1},
        {title: 'Testing This', author: 'The tester', id: 2},
        {title: 'Testing This', author: 'The tester', id: 3},
    ]

    if (context.clientContext.user) {
        return {
            statusCode: 200,
            body: JSON.stringify(someDataToTest)
        }
    }

    return {
        statusCode: 401,
        body: JSON.stringify({messg: 'You are not logged in! Create a new account or log in'})
    }
}