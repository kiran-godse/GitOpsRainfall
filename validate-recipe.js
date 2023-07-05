const Ajv = require('ajv');
const fs = require('fs');

async function validateSchema() {
  const ajv = new Ajv();
  const schema = JSON.parse(fs.readFileSync('./schema/recipe-schema.json', 'utf8')); // Update the path to your JSON schema

  const validate = ajv.compile(schema);
  const data = JSON.parse(fs.readFileSync('./recipes/cmake.recipe', 'utf8')); // Update the path to your JSON data

  const valid = validate(data);
  if (!valid) {
    console.log('Schema validation failed.');
    console.log(validate.errors);
    process.exit(1);
  } else {
    console.log('Schema validation succeeded.');
  }
}

validateSchema();
