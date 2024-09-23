import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Signup";
import ProfilePage from "./components/ProfilePage";
import ProfileEdit from "./components/ProfileEdit";
import SearchAlumni from "./components/SearchAlumni";
import Messaging from "./components/Messaging";
import JobList from "./components/JobList";
import JobPost from "./components/JobPost";
import EmergencyAssistance from "./components/EmergencyAssistance";
import MentorshipProgram from "./components/MentorshipProgram";
import AlumniMap from "./components/AlumniMap";
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: '#d8b3ff' }}> {/* Glitter Purple Background */}
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<ProfileEdit />} />
          <Route path="/search-alumni" element={<SearchAlumni />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path="/job-post" element={<JobPost />} />
          <Route path="/emergency-assistance" element={<EmergencyAssistance />} />
          <Route path="/mentorship-program" element={<MentorshipProgram />} />
          <Route path="/alumni-map" element={<AlumniMap />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
