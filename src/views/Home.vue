<template>
  <div>
    <h1>Home page</h1>
  </div>
</template>

<script setup>
import * as openaiapi from "openai";

async function askGPT(content) {
  const openai = new openaiapi.OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  const response = await openai.chat.completions.create({
    messages: [{ role: "user", content }],
    model: "gpt-3.5-turbo",
  });

  alert(response.choices[0].message.content);
}

// askGPT("Bonjour !");
</script>

<style scoped></style>
