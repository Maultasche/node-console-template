# A Node.js Console Application Template

This is a Node.js console application template that contains some example functionality. It parses command line arguments with commander and runs unit tests with jest. It's intended to both provide an example for you to learn from as well as a starting point for building your own Javscript console application.

## Building and Running

Assuming you have Node.js and yarn (or npm) already installed, run `yarn install` to install the package dependencies. Once that's done, run `yarn app` with the correct command line arguments to run the application. Note that npm can also be used instead of yarn if you'd prefer.

Here's what that looks like.

```
> yarn install
yarn install v1.22.4
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.1.3: The platform "linux" is incompatible with this module.
info "fsevents@2.1.3" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 1.95s.
> yarn app --operation add 3 5
yarn run v1.22.4
$ node ./lib/index.js --operation add 3 5
The result is 8
Done in 0.12s.
>
```

Tests can be run using `yarn test`. 

```
> yarn test
yarn run v1.22.4
$ jest
 PASS  tests/operations.test.js
  testing the add operation
    ✓ adding two positive numbers (2 ms)
    ✓ adding a positive number and a zero
    ✓ adding a positive number and a negative number (1 ms)
    ✓ adding a negative number and a zero
    ✓ adding two negative numbers
  testing the subtract operation
    ✓ subtracting two positive numbers (1 ms)
    ✓ subtracting a positive number from zero
    ✓ subtracting zero from a positive number
    ✓ subtracting a positive number from a negative number
    ✓ subtracting a negative number from zero (1 ms)
    ✓ subtracting zero from a negative number
    ✓ subtracting two negative numbers
    ✓ subtracting a large number from a small number
    ✓ subtracting a small number from a large number
  testing the multiply operation
    ✓ multiplying two positive numbers
    ✓ multiplying a positive number by zero
    ✓ multiplying a positive number by a negative number
    ✓ multiplying a negative number by zero
    ✓ multiplying two negative numbers (1 ms)
  testing the division operation
    ✓ dividing two positive numbers
    ✓ dividing a positive number by zero
    ✓ dividing zero by a positive number
    ✓ dividing a positive number by a negative number (1 ms)
    ✓ dividing a negative number by zero
    ✓ dividing zero by a negative number
    ✓ dividing two negative numbers

Test Suites: 1 passed, 1 total
Tests:       26 passed, 26 total
Snapshots:   0 total
Time:        1.007 s
Ran all test suites.
Done in 1.63s.
```

The application takes three arguments. The first one is the operation (add, sub, mult, div), which is specified with the `--operation` flag and the next two arguments are the numbers to be applied to the operation. 

This simple functionality is intended to give you an example of a console application with command line arguments while providing a template to use to quickly get your own application up and running.