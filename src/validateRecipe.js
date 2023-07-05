const fs = require('fs');
const Ajv = require('ajv');

// Load the recipe and schema files
const recipe = JSON.parse(fs.readFileSync('./recipes/cmake.recipe'));
const schema = JSON.parse(fs.readFileSync('./schema.json'));

// Create an instance of AJV
const ajv = new Ajv({ allErrors: true });

// Compile the schema
const validate = ajv.compile(schema);

// Validate the recipe
const valid = validate(recipe);
if (!valid) {
  console.log('Recipe is invalid.');
  console.log(validate.errors);
} else {
  console.log('Recipe is valid!');
}
