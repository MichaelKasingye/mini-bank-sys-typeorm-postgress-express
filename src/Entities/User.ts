import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from "typeorm";

/**
 * 
 */

@Entity("User")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  public id: number;
  // @PrimaryColumn({type:"uuid"})
  // public id: string;

  @Column({ name: 'name', nullable: true})
  name: string;

  @Column({ name: 'email', nullable: true})
  email: string;
  
  @Column({
		unique: true,
		length: 10,
    nullable: true
	})
  card_number: string;

  @Column({
    nullable: true
	})
  address: string;

}
