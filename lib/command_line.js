const program = require('commander');

/**
 * Indicates if any required command line arguments are missing
 *
 * @param {*} args
 */
function missingArgs(args) {
    args.operation === null ||
    args.operands === null ||
    args.operands.length < 2
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
    else if(args.operands <= 1) {
        console.log("Specify at least two operands");
        missingArgs = true;
    }
	
	if(missingArgs) {
		console.log("Use the --help option for command line information");
	}
};

/**
 * Parses the command line arguments
 *
 * @param processArgs - The raw command line arguments
 * @returns An object containing the parsed command line argument values
 */
function parseCommandLineArgs(processArgs) {
	program
		.version('1.0.0')
		.usage('[options] <operand 1> <operand 2>')
		.option('-op, --operation', 'The operation to perform: available operations are "add", "sub", "mult", "div"')
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