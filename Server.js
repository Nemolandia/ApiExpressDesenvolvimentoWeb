import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

// Página bonita em HTML + CSS interno
app.get('/', (req, res) => {
    const renderUrl = process.env.RENDER_EXTERNAL_URL || 'https://apiexpressdesenvolvimentoweb.onrender.com';

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>API no Render</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                    background-color: #f3f4f6;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .container {
                    background: white;
                    padding: 40px;
                    border-radius: 12px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    max-width: 400px;
                }
                h1 {
                    font-size: 24px;
                    color: #2563eb;
                    margin-bottom: 16px;
                }
                p {
                    color: #555;
                    margin-bottom: 24px;
                }
                a {
                    display: inline-block;
                    word-break: break-all;
                    background: #e0e7ff;
                    color: #1d4ed8;
                    padding: 10px 15px;
                    border-radius: 8px;
                    text-decoration: none;
                    font-weight: bold;
                    transition: background 0.3s;
                }
                a:hover {
                    background: #c7d2fe;
                }
                .date {
                    margin-top: 20px;
                    font-size: 12px;
                    color: #888;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>API no Render</h1>
                <p>Seu endpoint:</p>
                <a href="${renderUrl}" target="_blank">${renderUrl}</a>
                <div class="date">Atualizado: ${new Date().toLocaleString('pt-BR')}</div>
            </div>
        </body>
        </html>
    `);
});

// Endpoint da API (JSON)
app.get('/api', (req, res) => {
    res.json({
        date: new Date().toLocaleString('pt-BR'),
        status: 'API no Render funcionando!'
    });
});

// Porta dinâmica
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
