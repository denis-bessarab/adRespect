import express from 'express';
import { fileURLToPath } from 'url';
import * as path from 'path';

const app = express();

// Resolve the directory path of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the static file directory to serve the built Vue files
const staticDir = path.join(__dirname, 'dist');
app.use(express.static(staticDir));

// Serve the index.html file for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(staticDir, 'index.html'));
});

app.listen(process.env.PORT || 8080, () => {
    console.log('Server is running on port', process.env.PORT || 8080);
});
