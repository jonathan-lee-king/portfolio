# Interview Questions

## ASRC Federal

***Required a minimum of 1 rounds of formal interviews to get a job offer.***

### Round 0 (Informal phone interview with Project Manager)

- Informal conversation talking about what I have done, what I enjoy, etc.

### Round 1 (Formal Interview / Meet the Team)

1. On a scale of 1 to 10, how would you rate your TypeScript skills?
   1. Now, what would someone struggle with who is 1 lower on the scale?
2. ...

## PeopleTec

***Required a minimum of 4 rounds of formal interviews to get a job offer.***

### Round 1 (Human Resources / Recruiter)

- The recruiter asked me to introduce myself and go over my previous experience.
- He asked a few clarifying questions along the way as he was taking notes and wanted to ensure he was capturing things correctly.

### Solution Architect

#### Round 2 (Software Pillars / Gauge my knowledge, See if I am a fit for the team, How do I handle pressure)

1. Can you list all of the steps of the Software Development Lifecycle?
2. What is the difference between Zero Trust and the Traditional Security Model?
3. What is the difference between a Docker container and image?
4. Briefly describe and explain the differences between Infrastructure as a Service, Platform as a Service, and Software as a Service.
5. What is the difference between DevOps and DevSecOps?
6. What is the difference between SQL and NoSQL and when would you use each?
7. How do you get secret information into a kubernetes cluster without having the information exposed in files or to other users?
8. Why is the importance of version control and why is it critical in software development?
9. How do you store data in a kubernetes cluster?
10. How do you ensure your site never goes down and is always available?
    1. How do you set up high availability?
11. Explain your workflow from start to finish when you are assigned a new Jira ticket.
12. How do you scan for vulnerabilities before deploying to production?
    1. How would you scan a docker image?
13. What is the difference between a virtual machine and a container?
    1. Does a VM have its own operating system?
    2. Does a VM have its own kernel?
    3. Does a container have its own operating system?
    4. Does a container have its own kernel?

#### Round 3 (Technical Interview / Interact with Team)

1. **(Whiteboard)** Solve the "FizzBuzz" problem

    1. My first attempt.

        ```javascript
        for (var i=0; i < 100; i++) {
            if (i % 15 === 0) return "FizzBuzz"
            else if (i % 5 === 0) return "Buzz"
            else if (i % 3 === 0) return "Fizz"
            else return i
        }
        ```

    2. The technical lead pointed out there were 2 issues.  I looked for a minute but didn't see them.  He then led me to the special case of `0` and not actually printing `100`.

        I corrected the issues as follows.

        ```javascript
        for (var i=0; i <= 100; i++) {
            if (i === 0) return i
            else if (i % 15 === 0) return "FizzBuzz"
            else if (i % 5 === 0) return "Buzz"
            else if (i % 3 === 0) return "Fizz"
            else return i
        }
        ```

    3. I was then asked to optimize the solution further.

        I didn't see it at the time, but instead of checking for `if (i === 0) return 0` on the first line of the `for` loop, I could have bubbled it up above the `for` loop so that it didn't get checked on every iteration of the loop.

        The "correct" answer is below.  You can reduce checking the if statements

        ```javascript
        console.log('0')
        for (var i=0; i < 100; i++) {
            if (i % 15 === 0) return "FizzBuzz"
            else if (i % 5 === 0) return "Buzz"
            else if (i % 3 === 0) return "Fizz"
            else return i
        }
        ```

2. How would your previous coworkers describe working with you?

#### Round 4 (Program Manager? Job Offer?)

*I didn't make it this far.*
