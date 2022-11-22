import {
	Entity,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
	BaseEntity,
} from 'typeorm';
import { Client } from './Client';

export enum TransactionType {
	DEPOSIT = 'deposit',
	WITHDRAW = 'withdraw',
}

@Entity('transaction')
export class ImternalTransfer extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: 'enum',
		enum: TransactionType,
	})
	type: string;
// id of client A
// id Of client B
// amount
// many to many rlship
	@Column({
		type: 'numeric',
	})
	amount: number;

    @ManyToOne(
		() => Client,
		(client) => client.transactions,
		{
			onDelete: 'CASCADE',
		}
	)
	@JoinColumn({
		name: 'client_id',
	})
	client: Client;
}