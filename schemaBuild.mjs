import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";
import fs from "fs";

const explanationTerm = z.object({
    term: z.string(),
    definition: z.string()
});
const explanationFormat = z.object({
    explanation: z.array(explanationTerm)
});
const explanationJsonSchema = zodResponseFormat(explanationFormat, "explanation");

// Save the explanationJsonSchema JSON to a file 
// so that we can remove zod dependency:
const jsonSchema = JSON.stringify(explanationJsonSchema, null, 2);
const content = `export const explanationJsonSchema = ${jsonSchema};`;

fs.writeFileSync("explanationJsonSchema.mjs", content);
