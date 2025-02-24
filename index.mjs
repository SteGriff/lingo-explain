import { explain } from "./explain.mjs";

async function main() {

    // Ask GPT to explain a sentence from the target language
    // The output will be displayed as a number of bullet points
    // Each term-definition pair should be a JSON array member in the GPT response

    const targetLanguage = "Vietnamese";
    const testPrompts = [
        "Thái độ quan trọng hơn trình độ",
        "Tôi sẽ cố gắng viết thư cho cô ấy vào thứ năm tuần tới"
    ];

    for (const prompt of testPrompts) {
        console.log(`Explain: ${prompt}`);
        const explanation = await explain(targetLanguage, prompt);
        for (const word of explanation) {
            console.log(`${word.term}: ${word.definition}`);
        }
    }
}

main();
