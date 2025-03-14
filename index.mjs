import { explain } from "./explain.mjs";

async function main() {

    // Ask GPT to explain a sentence from the target language
    // The output will be displayed as a number of bullet points
    // Each term-definition pair should be a JSON array member in the GPT response

    const testSuites = [
        {
            "language": "Vietnamese",
            "prompts": [
                "Thái độ quan trọng hơn trình độ",
                "Tôi sẽ cố gắng viết thư cho cô ấy vào thứ năm tuần tới",
                "Anh bị dị ửng với đậu phộng"
            ]
        },
        {
            "language": "German",
            "prompts": [
                "Ich werde versuchen, ihr nächsten Donnerstag einen Brief zu schreiben",
                "Ich habe eine Erdnussallergie"
            ]
        },
        {
            "language": "Italian",
            "prompts": [
                "Ho un allergia alle arachidi",
                "Dopodomani andrò in città"
            ]
        }
    ];

    for (const suite of testSuites) {
        const targetLanguage = suite.language;
        console.log("=".repeat(40));
        console.log(`Language: ${targetLanguage}`);
        for (const prompt of suite.prompts) {
            console.log("-".repeat(40));
            console.log(`Explain: ${prompt}`);
            const explanation = await explain(targetLanguage, prompt);
            for (const word of explanation) {
                console.log(`${word.term}: ${word.definition}`);
            }
        }
    }
}

main();
