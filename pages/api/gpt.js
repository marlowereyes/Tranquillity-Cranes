import OpenAI from "openai"; 

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export default async function chatGPT(req, res) { 
    const completion = await openai.chat.completions.create({
        messages: [{"role": "system", "content": "You are a motivational speaker helping people manage stress and anxiety."},
            {"role": "user", "content": `I want a max 10 word sentence that is a motivational quote directed towards people with stress and anxiety`}],
        model: "gpt-3.5-turbo"
    });
    console.log(completion.choices);
    res.json(completion.choices[0].message.content);
}