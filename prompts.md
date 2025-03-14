# Prompt Engineering Research

In
```
const devPrompt = `Explain the ${targetLanguage} sentence by breaking down the meaning and purpose of each word`;
const userPrompt = "Thái độ quan trọng hơn trình độ";
```

Out
```
content: `{"explanation":[{"term":"Thái độ","definition":"This word means 'attitude.' It refers to a person's mindset, outlook, or disposition toward various situations, people, or tasks."},{"term":"quan trọng","definition":"This term means 'important.' It indicates that 
something holds significant value or priority."},{"term":"hơn","definition":"This word means 'more than' or 'greater than.' It is used to compare two things, showing that one has a higher degree than the other."},{"term":"trình độ","definition":"This term means 'level' or '`,
```

Bad - too long - each definition has a preamble


In
```
const devPrompt2 = `Explain the ${targetLanguage} sentence word-by-word`;
const userPrompt = "Thái độ quan trọng hơn trình độ";
```

Out
```
{"explanation":[{"term":"Thái độ","definition":"Attitude; refers to a person's mindset or approach towards situations."},{"term":"quan trọng","definition":"Important; signifies the significance or value of something."},{"term":"hơn","definition":"More; used to indicate a comparative degree."},{"term":"trình độ","definition":"Level or proficiency; refers to someone's skills, expertise or education level."}]}
```

Good!

In
```
Dev: Explain this sentence word-by-word
User: "Anh bị dị ửng với đậu phộng"
```

Out 
```
Anh: A pronoun meaning 'you' in a formal or respectful way, typically used to refer to an adult male.
bị: A verb meaning 'to be' in the context of being affected by something, often used to indicate something negative such as an illness or condition.
dị ứng: A noun phrase meaning 'allergy' which refers to an abnormal reaction of the immune system to a substance.
với: A preposition meaning 'with', indicating a relationship or association between two entities.
đậu phộng: A noun meaning 'peanut', referring to the legume that is often eaten as a snack or used in various dishes.
```

Very long for some reason, but with the other sentences above it gives the same output (caching?)

In
```
Dev: Explain this sentence word-by-word. BE CONCISE.
```

Out
```
Anh: A pronoun meaning 'he' or 'older brother' in Vietnamese.
bị: A verb indicating being affected or experiencing something.
dị ửng: An adjective meaning 'allergic' or experiencing an allergy.
với: A preposition meaning 'with' or 'to'.
đậu phộng: A noun meaning 'peanuts'.
```

In 
```
Dev: Give a v concise definition of each word in this sentence:
User: (two example sentences as shown below)
```

Out 
```
Explain: Thái độ quan trọng hơn trình độ
Thái độ: Cách ứng xử, quan điểm, hoặc tư duy của một người đối với một vấn đề hoặc tình huống.
quan trọng: Có giá trị lớn, ảnh hưởng mạnh mẽ đến một sự việc hoặc tình huống.
hơn: Biểu thị sự so sánh, khi một điều gì đó vượt trội hơn điều khác.
trình độ: Mức độ kiến thức, kỹ năng hoặc khả năng của một người trong một lĩnh vực cụ thể.

Explain: Anh bị dị ửng với đậu phộng
Anh: A term used to refer to an older brother or a male person.
bị: Indicates being affected by something, often used to express a negative situation.
dị ửng: An allergic reaction which can involve symptoms like rash or swelling.
với: A preposition meaning 'with' or 'to' indicating a relationship or association.
đậu phộng: Peanut, a type of legume commonly used as food.
```

Very hit and miss dev prompt! It didn't respond to the first example in English!
