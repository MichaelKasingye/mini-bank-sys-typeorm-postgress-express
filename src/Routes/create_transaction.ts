import express from 'express';
import { Client } from '../Entities/Client';
import {
	Transaction,
	TransactionType,
} from '../Entities/Transaction';

const router = express.Router();

router.post(
	'/api/client/:clientId/transaction',
	async (req, res) => {
		const { clientId } = req.params;

		const { type, amount } = req.body;

		const client = await Client.findOneBy({ id: parseInt(clientId) });

		if (!client) {
			return res.json({
				msg: 'client not found',
			});
		}

		const transaction = await Transaction.create({
			amount,
			type,
			client,
		});

		await transaction.save();

		if (type === TransactionType.DEPOSIT) {
			client.balance = parseInt(client.balance + amount);
			client.transactions = [transaction];
		} else if (
			type === TransactionType.WITHDRAW
		) {
			client.balance = (client.balance) - parseInt(amount);
			client.transactions = [transaction];
		}

		await client.save();

		return res.json(
            {
                msg:"Transaction made",
                client,
            }
        );
	}
);

export { router as createTransactionRouter };
