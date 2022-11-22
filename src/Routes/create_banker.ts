import express from 'express';
import { Banker } from '../Entities/Banker';

const router = express.Router();

router.post('/api/banker', async (req, res) => {
    console.log('/api/banker');
try {
    const {
		name,
		email,
		card_number,
		employee_number,
	} = req.body;

	const banker = Banker.create({
		name: name,
		email,
		card_number: card_number,
		employee_number: employee_number,
	});

	await banker.save();

	 res.json(banker);
} catch (error) {
    console.log(error);
    
}
	
});

export { router as createBankerRouter };
