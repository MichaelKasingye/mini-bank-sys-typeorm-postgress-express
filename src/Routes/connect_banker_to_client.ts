import express from 'express';
import { Client } from '../Entities/Client';
import { Banker } from '../Entities/Banker';

const router = express.Router();

router.put(
	'/api/banker/:bankerId/client/:clientId',
	async (req, res) => {
		const { bankerId, clientId } = req.params;

		const client = await Client.findOneBy({ id: parseInt(clientId) })
	

		const banker = await Banker.findOneBy({ id: parseInt(bankerId) })

		if (banker && client) {
			banker.clients = [client];
			await banker.save();
			return res.json({
				msg: 'banker connected to client',
			});
		} else {
			return res.json({
				msg: 'banker or client not found',
			});
		}
	}
);

export { router as connectBankerToClientRouter };