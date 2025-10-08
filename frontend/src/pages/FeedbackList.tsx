import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { Link } from "react-router-dom";

interface Feedback {
    id: number;
    employee_name?: string;
    message: string;
    sentiment: string;
    created_at: string;
}

export default function FeedbackList() {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const [page, setPage] = useState(1);
    const [sentiment, setSentiment] = useState("");
    const [hasNext, setHasNext] = useState(false);

    const fetchFeedbacks = async () => {
        const res = await axios.get(
            `${API_URL}/feedbacks?page=${page}&sentiment=${
                sentiment ? `${sentiment}` : ""
            }`
        );
        setFeedbacks(res.data);
        setHasNext(res.data.length === 5); // crude next-page check
    };

    useEffect(() => {
        fetchFeedbacks();
    }, [page, sentiment]);

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    All Feedbacks
                </h2>
                <div className="flex justify-between items-center mb-6">
                    <select
                        className="border rounded-lg px-3 py-2"
                        value={sentiment}
                        onChange={(e) => {
                            setPage(1);
                            setSentiment(e.target.value);
                        }}
                    >
                        <option value="">All</option>
                        <option value="good">Good</option>
                        <option value="neutral">Neutral</option>
                        <option value="bad">Bad</option>
                    </select>
                    <Link
                        to="/"
                        className="px-3 py-2 bg-gray-200 text-white rounded-xl shadow hover:bg-green-700"
                    >
                        🏠
                    </Link>
                    <Link
                        to="/add"
                        className="px-3 py-2 bg-green-600 text-white font-bold rounded-xl shadow hover:bg-green-700"
                    >
                        Give Feedback
                    </Link>
                </div>

                <div className="space-y-4">
                    {feedbacks.map((f) => (
                        <div
                            key={f.id}
                            className="p-4 bg-white rounded-xl shadow border border-gray-100"
                        >
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-gray-700">
                                    {f.employee_name || "Anonymous"}
                                </p>
                                <span
                                    className={`text-sm px-3 py-1 rounded-full ${
                                        f.sentiment === "good"
                                            ? "bg-green-100 text-green-700"
                                            : f.sentiment === "bad"
                                            ? "bg-red-100 text-red-700"
                                            : "bg-gray-100 text-gray-700"
                                    }`}
                                >
                                    {f.sentiment}
                                </span>
                            </div>
                            <p className="mt-2 text-gray-600">{f.message}</p>
                            <p className="text-xs text-gray-400 mt-1">
                                {new Date(f.created_at).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between mt-8">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage((p) => p - 1)}
                        className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
                    >
                        Prev
                    </button>
                    <button
                        disabled={!hasNext}
                        onClick={() => setPage((p) => p + 1)}
                        className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
