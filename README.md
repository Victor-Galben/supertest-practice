# About
API automation test with supertest framework
An example of using SuperTest with Mocha as the test runner
- Supertest is library written to test HTTP calls in node.js. So if you want to write test cases which going to do some HTTP calls ( GET, POST, PUT etc ) then this might be the best tool for you.
- Supertest is based on superagent HTTP client with ```expect``` assertion.
- SuperTest offers a very simple way to test APIs with just few lines of commands and well documented doc.
- Mocha - runs on Node.js and allows you to develop test cases for your program and execute them in serial with proper reporting. 

# Getting Started
- Make sure you have installed [node.js](https://nodejs.org/en/) on your machine
- In order to install you will need to clone the project on your local.
- Project location: [supertest-practice](https://github.com/Victoryyyyy/supertest-practice.git).
- Open the project folder in you IDE (Ex: vscode)
- Open the terminal and run next comand:

```npm install```

wait for dependecies to be instaled tthen you can move forward.

# Run tests
Open the terminal and run next comand: 

```npm test```

afte runnig the tests you should see in your terminal the runing report: 

```
CRUD tests for users
    √ creats user 
    √ read user 
    √ update user with putch 
    √ update user with put 
    √ delete user 

    5 passing
```

