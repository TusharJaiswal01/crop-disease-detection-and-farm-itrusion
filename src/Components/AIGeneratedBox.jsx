import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const AIGeneratedBox = ({CropStatus}) => {


    const [aiData, setAiData] = useState(""); 
    const [loading, setLoading] = useState(false);

    let apiKey = "AIzaSyD-rwPq8xV2XktuVdDsFlhZC34T5GILr3s";
    const modelType = "gemini-1.5-flash";
    const promptText = `Explain in not more than 200 words, What is a ${CropStatus} Crop or Plant Condition and mention in points What are the measures we can take for a healthy crop? Give the information in bullet points.`;


    const gemini_stream = async (params) => {
        try {
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: modelType });
            const result = await model.generateContentStream(params.userInput);

            let text = "";
            let offset = 0;
            for await (const chunk of result.stream) {
                const chunkText = chunk.text();
                text += chunkText;
                if (chunkText.length > offset) {
                    await params.streamMessage(text);
                    offset = chunkText.length;
                    await new Promise(resolve => setTimeout(resolve, 30));
                }
            }
            await params.streamMessage(text);
        } catch (error) {
            await params.injectMessage("Unable to load model, is your API Key valid?");
        }
    }

    const handleGenerate = async () => {
        setLoading(true);
        setAiData(""); // Clear previous AI data
        if(!CropStatus){
            setAiData("First Enter the Image for Disease Identification");
            return setLoading(false);
        }
        try {
            const params = {
                userInput: promptText,
                streamMessage: async (message) => setAiData(prev => prev + message),
                injectMessage: async (message) => setAiData(message)
            };
            await gemini_stream(params);
        } catch (error) {
            console.error('Error generating data:', error);
        } finally {
            setLoading(false);
        }
    };


    // Simulate an AI data generation process
    // const simulateAIGeneration = async () => {
    //     return await gemini_stream()
    // };

    return (
        <div className=" flex flex-col justify-center h-80 align-middle items-center container mx-auto px-4">
            <img className=" h-16 w-16" src="https://cdn-icons-png.freepik.com/256/6583/6583648.png?ga=GA1.1.2115079256.1724344357&semt=ais_hybrid" alt="" />
            <button
                onClick={handleGenerate}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-green-800 via-green-600 to-green-900 text-white mb-4"
                disabled={loading}
            >
                {loading ? 'Generating...' : 'Generate AI Data'}
            </button>

            {aiData && (
                <div className="border p-4 rounded-md shadow-md bg-[#fdff8a] max-w-96 overflow-y-auto">
                    <h2 className="text-xl font-semibold mb-2">Generated Data:</h2>
                    <p>{aiData}</p>
                </div>
            )}
        </div>
    );
};

export default AIGeneratedBox;
