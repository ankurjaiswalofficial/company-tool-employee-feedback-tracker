import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config";

export default function AddFeedback() {
    const [employeeName, setEmployeeName] = useState("");
    const [message, setMessage] = useState("");
    const [sentiment, setSentiment] = useState("neutral");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post(`${API_URL}/feedbacks`, {
            employee_name: employeeName || null,
            message,
            sentiment,
        });
        navigate("/feedbacks");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
            >
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                    Give Feedback
                </h2>

                <input
                    type="text"
                    placeholder="Your name (optional)"
                    className="w-full border rounded-lg px-3 py-2"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                />

                <textarea
                    placeholder="Write your feedback..."
                    className="w-full border rounded-lg px-3 py-2 h-28"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <select
                    className="w-full border rounded-lg px-3 py-2"
                    value={sentiment}
                    onChange={(e) => setSentiment(e.target.value)}
                >
                    <option value="good">Good</option>
                    <option value="neutral">Neutral</option>
                    <option value="bad">Bad</option>
                </select>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                    Submit Feedback
                </button>
            </form>
        </div>
    );
}
