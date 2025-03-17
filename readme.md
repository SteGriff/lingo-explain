# lingo-explain

Explain foreign language phrases by breaking them down with an LLM. 

You need an OPENAI_API_KEY and/or DEEPSEEK_API_KEY.

Set the LLM in `index.mjs` for now (`const apiName`)

## Run

Node 20+

```
node --env-file .env index.mjs
```

Node 16

```
export OPENAI_API_KEY=something
export DEEPSEEK_API_KEY=something
node index.mjs
```

## env file

Define a `.env` file containing keys:

```
OPENAI_API_KEY=
DEEPSEEK_API_KEY=
```