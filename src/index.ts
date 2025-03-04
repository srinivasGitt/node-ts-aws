import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(userRoutes);

app.get('/', (req, res) => {
    res.send('hi hw r i')
})

// Global error handler (optional but recommended)
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
