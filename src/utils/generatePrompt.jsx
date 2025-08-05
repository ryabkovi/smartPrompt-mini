import React, { useState } from "react";

function generatePrompt() {
  const [idea, setIdea] = useState("");
  const [role, setRole] = useState("");
  const [topic, setTopic] = useState("");
  const [prompt, setPrompt] = useState("");

  function handleGeneratePrompt() {
    if (!idea || !role) {
      alert("Please fill in all required fields.");
      return;
    }

    const generatedPrompt = `As a ${role}, I want to create a prompt for the topic "${
      topic || "general"
    }" based on the idea: "${idea}".`;
    setPrompt(generatedPrompt);
  }

  return (
    <main className="max-w-xl mx-auto space-y-5">
      <input
        type="text"
        placeholder="Enter your idea..."
        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        required
      />

      <select
        className="w-full p-3 border rounded-xl bg-white"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
      >
        <option value="">Select a role</option>
        <option>Product Manager</option>
        <option>UX Designer</option>
        <option>Developer</option>
      </select>

      <select
        className="w-full p-3 border rounded-xl bg-white"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      >
        <option value="">Select a topic</option>
        <option>Startup Idea</option>
        <option>Marketing Strategy</option>
        <option>Landing Page Copy</option>
      </select>

      <button
        className="w-full bg-blue-600 text-white p-3 rounded-xl font-medium hover:bg-blue-700 transition"
        onClick={handleGeneratePrompt}
      >
        Generate Prompt
      </button>

      {prompt && (
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Prompt Preview
          </h2>
          <p className="text-gray-700">{prompt}</p>
        </div>
      )}
    </main>
  );
}

export default generatePrompt;
