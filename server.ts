import express from "express";
import { createServer as createViteServer } from "vite";
import path from "node:path";
import axios from "axios";

async function startServer() {
  const app = express();
  app.use(express.json());
  const PORT = 3000;

  // API routes
  app.post("/api/newsletter", async (req, res) => {
    const { email } = req.body;
    const apiKey = process.env.MAILERLITE_API_KEY;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    if (!apiKey) {
      console.error("MAILERLITE_API_KEY is not defined");
      return res.status(500).json({ error: "Newsletter service is not configured" });
    }

    try {
      // MailerLite V2 API to add subscriber
      const response = await axios.post(
        "https://connect.mailerlite.com/api/subscribers",
        {
          email: email
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${apiKey.trim()}`
          }
        }
      );

      return res.status(201).json({ success: true, data: response.data });
    } catch (error: any) {
      console.error("MailerLite Error:", error.response?.data || error.message);
      
      // If subscriber already exists, MailerLite might return 422 or similar
      // We can handle specific cases here if needed
      
      return res.status(error.response?.status || 500).json({
        error: error.response?.data?.message || "Failed to subscribe"
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
