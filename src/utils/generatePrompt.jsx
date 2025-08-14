import React, { useState } from "react";
import toast from "react-hot-toast";
import "../index.css";

function generatePrompt() {
  const [idea, setIdea] = useState("");
  const [role, setRole] = useState("");
  const [topic, setTopic] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleGeneratePrompt() {
    if (!idea || !role) {
      toast.error("Please fill in all required fields.");
      return;
    } else {
      toast.success("Successfully toasted!");
    }

    setIsLoading(true);
    setPrompt("");
    setCopied(false);

    setTimeout(() => {
      const generatedPrompt = `As a ${role}, I want to create a prompt for the topic "${
        topic || "general"
      }" based on the idea: "${idea}".`;
      setPrompt(generatedPrompt);
      setIsLoading(false);
    }, 1200);
  }

  function handleCopy() {
    if (prompt) {
      navigator.clipboard.writeText(prompt).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
    }
  }

  return (
    <main className="max-w-xl mx-auto space-y-5 p-4 md:grid-cols-2">
      <input
        aria-label="Enter your idea"
        type="text"
        placeholder="Enter your idea"
        className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        required
      />

      <select
        aria-label="Select a role"
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
        aria-label="Select a topic"
        className="w-full p-3 border rounded-xl bg-white"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        required
      >
        <option value="">Select a topic</option>
        <option>Startup Idea</option>
        <option>Marketing Strategy</option>
        <option>Landing Page Copy</option>
      </select>

      <button
        aria-describedby="Generating-button"
        type="button"
        className="w-full bg-blue-600 text-white p-3 rounded-xl font-medium hover:bg-blue-700 transition "
        onClick={handleGeneratePrompt}
      >
        {isLoading ? "Generating..." : "Generate Prompt"}
      </button>

      {prompt && (
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Prompt Preview
          </h2>
          <p className="text-gray-700 mb-5">{prompt}</p>
          <button
            type="button"
            className={`px-4 py-2 rounded-lg font-medium transition border ${
              copied
                ? "bg-green-500 text-white border-green-500"
                : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
            }`}
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy to Clipboard"}
          </button>
        </div>
      )}
    </main>
  );
}

export default generatePrompt;
