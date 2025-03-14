import OpenAI from 'openai';
import { responseFormat } from './responseFormat.mjs';

const openai = new OpenAI(); // key defaults to process.env["OPENAI_API_KEY"]

const getPrompting = (languageName) => {
    const devPrompt = languageName
        ? `Explain the ${languageName} sentence word-by-word`
        : `Explain this sentence word-by-word. BE CONCISE.`;

    const languageMappings = {
        "Spanish": {
            userSample: "El gato está en la caja",
            assistantSample: "El: the (masculine); gato: cat; está: is currently; en: in/on; la: the (feminine); caja: box"
        },
        "Japanese": {
            userSample: "猫は箱の中にいます",
            assistantSample: "猫: cat; は: topic marker; 箱: box; の: of; 中: inside; に: in; います: is currently"
        },
        "Vietnamese": {
            userSample: "Tôi sẽ cố gắng viết thư cho cô ấy vào thứ năm tuần tới",
            assistantSample: "Tôi: I; sẽ: will; cố gắng: try; viết: write; thư: letter; cho: to; cô ấy: her; vào: on; thứ năm: Thursday; tuần: week; tới: next"
        },
        "French": {
            userSample: "Je vais essayer d'écrire une lettre à elle jeudi prochain",
            assistantSample: "Je: I; vais: will; essayer: try; d'écrire: to write; une: a; lettre: letter; à: to; elle: her; jeudi: Thursday; prochain: next"
        },
        "German": {
            userSample: "Ich werde versuchen, ihr nächsten Donnerstag einen Brief zu schreiben",
            assistantSample: "Ich: I; werde: will; versuchen: try; ihr: her; nächsten: next; Donnerstag: Thursday; einen: a; Brief: letter; zu: to; schreiben: write"
        },
        "Chinese": {
            userSample: "我会尝试在下周四给她写信",
            assistantSample: "我: I; 会: will; 尝试: try; 在: at; 下周四: next Thursday; 给: to; 她: her; 写信: write letter"
        }
    }

    return {
        devPrompt,
        userSample: languageMappings[languageName]?.userSample,
        assistantSample: languageMappings[languageName]?.assistantSample
    }
}

export const explain = async (languageName, phrase) => {

    const { devPrompt, userSample, assistantSample } = getPrompting(languageName);

    // Add the developer prompt
    const messages = [{ role: 'developer', content: devPrompt }];

    // Add one-shot if available
    if (userSample && assistantSample) {
        console.log("USING ONE-SHOT FOR", languageName);
        messages.push(
            { role: 'user', content: userSample },
            { role: 'assistant', content: assistantSample }
        );
    }

    // Add the user input
    messages.push({ role: 'user', content: phrase });

    const completion = await openai.chat.completions.create({
        messages,
        max_tokens: 300,
        model: 'gpt-4o-mini',
        response_format: responseFormat
    });

    const answerJson = completion.choices[0].message.content;
    const answer = JSON.parse(answerJson);
    return answer.explanation;
}
