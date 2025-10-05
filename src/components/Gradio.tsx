import React from "react";

export default function GradioChat() {
  return (
    <div style={{ width: "100%", height: "700px", border: "1px solid #ccc" }}>
      <iframe
        src="http://127.0.0.1:7860"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="MilesBot Career Chat"
      />
    </div>
  );
}
