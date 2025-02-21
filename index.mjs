import OpenAI from 'openai';
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from "zod";

console.log("key", process.env["OPENAI_API_KEY"]);

const openai = new OpenAI(); // key defaults to process.env["OPENAI_API_KEY"]

async function main() {

    // Ask GPT to explain a sentence from the target language
    // The output will be displayed as a number of bullet points
    // Each term-definition pair should be a JSON array member in the GPT response
    // Build a schema to get this response using zod

    const explanationTerm = z.object({
        term: z.string(),
        definition: z.string()
    });
    const explanationFormat = z.object({
        explanation: z.array(explanationTerm)
    });
    const responseFormat = zodResponseFormat(explanationFormat, "explanation");

    const targetLanguage = "Vietnamese";
    const devPrompt = `Explain the ${targetLanguage} sentence word-by-word`;
    const userPrompt = "Thái độ quan trọng hơn trình độ";
    const userPrompt2 = "Tôi sẽ cố gắng viết thư cho cô ấy vào thứ năm tuần tới";

    const completion = await openai.chat.completions.create({
        messages: [
            { role: 'developer', content: devPrompt },
            { role: 'user', content: userPrompt2 }
        ],
        max_tokens: 200,
        model: 'gpt-4o-mini',
        response_format: responseFormat
    });

    console.log(completion.choices);
}

main();
