const fs = require('fs');
const Ajv = require('ajv');
require('ajv-keywords')(Ajv); // Add support for additional keywords

// Load the recipe file
const recipePath = './recipes/cmake.recipe';
const recipe = JSON.parse(fs.readFileSync(recipePath, 'utf8'));

// Load the schema file
const schemaPath = './.schema/recipe.json';
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

// Create an instance of AJV
const ajv = new Ajv({ allErrors: true });

// Validate the recipe against the schema
const validate = ajv.compile(schema);
const valid = validate(recipe);

if (!valid) {
  console.log('Recipe is invalid.');
  console.log(validate.errors);
} else {
  console.log('Recipe is valid!');
}


// const fs = require('fs');
// const Ajv = require('ajv');

// // Load the recipe file
// const recipePath = 'C:/PSS/GitOps/Rainfalltrial/GitOpsRainfall/recipes/cmake.recipe';

// const recipe = JSON.parse(fs.readFileSync(recipePath, 'utf8'));

// // Load the schema file
// const schemaPath = 'C:/PSS/GitOps/Rainfalltrial/GitOpsRainfall/.schema/recipe.json';

// const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));

// // Create an instance of AJV
// const ajv = new Ajv({ allErrors: true });

// // Compile the schema
// const validate = ajv.compile(schema);

// // Validate the recipe
// const valid = validate(recipe);
// if (!valid) {
//   console.log('Recipe is invalid.');
//   console.log(validate.errors);
// } else {
//   console.log('Recipe is valid!');
// }
