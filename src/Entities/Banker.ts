import {
    Entity,
    BaseEntity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    ManyToMany,
    JoinTable,
  } from "typeorm";
import { Client } from "./Client";
import { User } from "./User";
  
  /**
   * 
   */
  
   @Entity('banker')
   export class Banker extends User {
    @Column({
		length: 10,
		unique: true,
	})
	employee_number: string;

    @ManyToMany((type) => Client, 
  
    )
	@JoinTable({
		name: 'bankers_clients',
		joinColumn: {
			name: 'banker',
			referencedColumnName: 'id',
		},
		inverseJoinColumn: {
			name: 'client',
			referencedColumnName: 'id',
		},
	})
	clients: Client[];
  
  }
  