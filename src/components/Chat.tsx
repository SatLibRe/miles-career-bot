import React from "react";
import styles from "./Chat.module.css";
import profilePic from "./profile.jpg"; // replace with your image
import GradioChat from "./Gradio";

export default function Chat() {
  return (
    <div className={styles.chatContainer}>
      {/* Profile image */}
      <img src="/profile.jpg" alt="Profile" className={styles.profileImage} />


      {/* Welcome message */}
      <div className={styles.welcomeMessage}>
        Let’s talk about my experience—and why I’m the right fit for your team.
      </div>

      {/* Chat box (Gradio iframe) */}
      <div className={styles.chatBox}>
        <GradioChat/>
      </div>
    </div>
  );
}
