const commandLine = require("./command_line");
const operations = require("./operations");

const operationFunctionMap = {
    "add": operations.add,
    "sub": operations.subtract,
    "mult": operations.multiply,
    "div": operations.divide
};

//Parse the command line arguments
const args = commandLine.parseCommandLineArgs(process.argv);

if(commandLine.missingArgs(args)) {
    //If any required arguments are missing, output the relevant information
    commandLine.outputMissingArgs(args);
}
else if(!commandLine.validateOperation(args.operation)) {
    //If the given operation was invalid, output the relevant information
    commandLine.outputInvalidOperation(args.operation);
}
else {
    //Argument parsing and validation was successful. Perform the operation.
    const operationFunc = operationToFunction(args.operation);

    const result = operationFunc.apply(this, args.operands);

    commandLine.outputResult(result);
}



/**
 * Maps an operation string to an operation function
 * 
 * @param {string} operation 
 * @returns The function corresponding to the operation or undefined if no such
 *  operation exists
 */
function operationToFunction(operation) {
    return operationFunctionMap[operation];    
}