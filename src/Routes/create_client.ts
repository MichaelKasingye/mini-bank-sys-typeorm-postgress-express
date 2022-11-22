import express from 'express';
import { Client } from '../Entities/Client';
// import { Client } from '../entities/Client';

const router = express.Router();

router.post('/api/client', async (req, res)=>{
    try {
        console.log('/api/client');
        
        const {
            name,
            email,
            card_number,
            balance,
        } = req.body;
    
        const client = Client.create({
            name: name,
            email:email,
            card_number: card_number,
            balance:balance,
        });
    
        await client.save();
    
        await res.json(client);
    } catch (error) {
        console.log(error);
        
    }
	
});

export { router as createClientRouter };
