# Prompt Engineering

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

```
const devPrompt = `Explain the ${targetLanguage} sentence by breaking down the meaning and purpose of each word`;
const devPrompt2 = `Explain the ${targetLanguage} sentence word-by-word`;
const userPrompt = "Thái độ quan trọng hơn trình độ";
const userPrompt2 = "Tôi sẽ cố gắng viết thư cho cô ấy vào thứ năm tuần tới";
```