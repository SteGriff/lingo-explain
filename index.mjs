import OpenAI from 'openai';
import { responseFormat } from './responseFormat.mjs';

const openai = new OpenAI(); // key defaults to process.env["OPENAI_API_KEY"]

async function main() {

    // Ask GPT to explain a sentence from the target language
    // The output will be displayed as a number of bullet points
    // Each term-definition pair should be a JSON array member in the GPT response
    // Build a schema to get this response using zod

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
    const answerJson = completion.choices[0].message.content;
    const answer = JSON.parse(answerJson);
    for (const explanation of answer.explanation) {
        console.log(`${explanation.term}: ${explanation.definition}`);
    }
}

main();
