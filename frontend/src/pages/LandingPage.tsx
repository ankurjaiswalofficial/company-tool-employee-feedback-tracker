import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
                Employee Feedback Tracker
            </h1>
            <p className="text-gray-600 mb-10 text-center max-w-lg">
                Collect, analyze, and understand team sentiment effortlessly.
            </p>
            <div className="flex gap-4">
                <Link
                    to="/feedbacks"
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
                >
                    View Feedbacks
                </Link>
                <Link
                    to="/add"
                    className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700"
                >
                    Give Feedback
                </Link>
            </div>
        </div>
    );
}
