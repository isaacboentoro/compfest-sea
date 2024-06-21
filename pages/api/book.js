import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, date, time } = req.body;

        try {
            await sql`
                INSERT INTO bookings (name, email, date, time)
                VALUES (${name}, ${email}, ${date}, ${time})
            `;
            res.status(200).json({ message: 'Booking created successfully' });
        } catch (error) {
            console.error('Error creating booking:', error);
            res.status(500).json({ error: 'Error creating booking' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}