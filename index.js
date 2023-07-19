const Ajv = require('ajv');
const ajvKeywords = require('ajv-keywords');
const schema = require('./.schema/recipe.json');
const recipeData = require('./recipes/cmake.json');

// Remove the $schema keyword from the schema
delete schema['$schema'];

// Fix the schema object to remove unsupported custom keyword "cname"
delete schema.properties.package.properties.name.cname;

// Fix the schema object to set the "uniqueItems" keyword to boolean true
schema.properties.package.properties.platforms.uniqueItems = true;

const ajv = new Ajv.default({ allErrors: true });
ajvKeywords(ajv, ['regexp']);

validateRecipe(recipeData);
readRecipe(recipeData);

function validateRecipe(data) {
    const validate = ajv.compile(schema);
    const isValid = validate(data);

    if (isValid) {
        console.log('Recipe is valid!');
        return true;
    } else {
        console.log('Recipe is invalid:', validate.errors);
        return false;
    }
}

function readRecipe(data) {
    if (validateRecipe(data)) {
        console.log('Substrate data:', data.substrate);
    }
}
