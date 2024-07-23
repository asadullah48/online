export const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        default: () => 'John Doe',
        validate: (value) => {
            if (value.length) {
                return true;
            }
            else {
                return 'Please enter your name.';
            }
        },
    },
    {
        type: 'number',
        name: 'age',
        message: 'What is your age?',
        default: () => 32,
        validate: (value) => {
            if (value) {
                return true;
            }
            else {
                return 'Please enter your age.';
            }
        },
    },
];
