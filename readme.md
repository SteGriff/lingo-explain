# lingo-explain

Explain foreign language phrases by breaking them down with an LLM. 

You need an API key.

## Run

Node 20+

```
node --env-file .env index.mjs
```

Node 16

```
export OPENAI_API_KEY=something
node index.mjs
```

## env file

Define a `.env` file containing keys:

```
OPENAI_API_KEY=
...
```