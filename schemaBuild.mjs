import fs from "fs";
import { explanationJsonSchema } from "./schema-builders/explanation.schema.mjs";

// Build each Schema JSON to a file 
// so that we can remove zod dependency at runtime

const schemas = [explanationJsonSchema];

for (const schema of schemas) {
    console.log(schema);
    const jsonSchema = JSON.stringify(schema.def, null, 2);
    const content = `export const ${schema.name}JsonSchema = ${jsonSchema};`;
    fs.writeFileSync(`schemas/${schema.name}JsonSchema.mjs`, content);
}
