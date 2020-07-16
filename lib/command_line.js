const program = require('commander');

const validOperations = ["add", "sub", "mult", "div"];

/**
 * Indicates if any required command line arguments are missing
 *
 * @param {*} args
 */
function missingArgs(args) {
    return args.operation === null ||
        args.operands === null ||
        args.operands.length < 2;
}

/**
 * Outputs any missing command line arguments
 *
 * @param args - The object containing the command line argument values
 */
function outputMissingArgs(args) {
	let missingArgs = false;
	
	if(args.operation === null) {
		console.log("An operation is required");
		missingArgs = true;
	}
	if(args.operands === null) {
		console.log("The operands are required");
		missingArgs = true;
    }
    else if(args.operands.length <= 1) {
        console.log("Specify at least two operands");
        missingArgs = true;
    }
	
	if(missingArgs) {
		console.log("Use the --help option for command line information");
	}
};

/**
 * Outputs a message when an invalid operation is given
 * 
 * @param {string} operation - An operation that was determined to be invalid
 */
function outputInvalidOperation(operation) {
    const validOperationsString = createValidOperationsString(validOperations);

    console.log(`"${operation}" is not a valid operation. Valid operations are ${validOperationsString}`);
}

/**
 * Outputs the result of the operation
 * 
 * @param {number} result - The result of the operation
 */
function outputResult(result) {
    console.log(`The result is ${result}`);
}

/**
 * Validates whether the given operation is a valid operation
 * 
 * @param {string} operation - An operation descriptor from the command line
 * @returns true if the operation is valid, otherwise false
 */
function validateOperation(operation) {
    return validOperations.includes(operation);
}

/**
 * Parses the command line arguments
 *
 * @param processArgs - The raw command line arguments
 * @returns An object containing the parsed command line argument values
 */
function parseCommandLineArgs(processArgs) {
    const validOperationsString = createValidOperationsString(validOperations);

	program
		.version('1.0.0')
		.usage('[options] <operand 1> <operand 2>')
		.option(`-op, --operation <operation>', 'The operation to perform: available operations are ${validOperationsString}`)
		.parse(processArgs);
	
	const args = {
		operation: program.operation === undefined ? null : program.operation,
		operands: parseOperands(program.args)
	};

	return args;
}

/**
 * Parses the operands from the arguments
 * 
 * @param {string[]} args - The operand arguments 
 */
function parseOperands(operandArgs) {
    let operands = null;

    if(operandArgs.length > 1) {
        operands = operandArgs.map(operand => Number(operand));
    }

    return operands;
}

/**
 * Creates a comma-separated string of valid operations
 * 
 * @param {string[]} validOperations - An array containing valid operations
 * @returns {string} A comma-separated string containing the valid operations
 */
function createValidOperationsString(validOperations) {
    const validOperationsString = validOperations
        .map(operation => `"${operation}"`)
        .join(",");

    return validOperationsString;
}

const commandLine = {
    missingArgs,
    outputMissingArgs,
    outputInvalidOperation,
    outputResult,
    parseCommandLineArgs,
    validateOperation
};

module.exports = commandLine;