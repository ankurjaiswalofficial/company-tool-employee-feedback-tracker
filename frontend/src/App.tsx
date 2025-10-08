import { Routes, Route } from "react-router-dom";
import Landing from "./pages/LandingPage";
import FeedbackList from "./pages/FeedbackList";
import AddFeedback from "./pages/AddFeedback";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/feedbacks" element={<FeedbackList />} />
            <Route path="/add" element={<AddFeedback />} />
        </Routes>
    );
}
