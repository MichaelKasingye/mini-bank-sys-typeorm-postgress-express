import {
    Entity,
    BaseEntity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryColumn,
    OneToMany,
    ManyToMany,
  } from "typeorm";
import { Banker } from "./Banker";
import { Transaction } from "./Transaction";
import { User } from "./User";
  
  /**
   * 
   */
  
  @Entity("client")
  export class Client extends User {
    @Column({ type: "numeric" })
  balance: number;

  @Column({
    name: "active",
    default: true,  
  })
  is_active: boolean;

  @Column({
    type: "simple-json",
    nullable: true,
  })
  additional_info: {
    age: number;
    hair_color: string;
  };

  @Column({
    type: "simple-array",
    default: [],
  })
  family_members: string[];

  @OneToMany(
    () => Transaction,
    (transaction) => transaction.client
)
transactions: Transaction[];
  
@ManyToMany((type) => Banker,
 {
    cascade: true,
}
)
bankers: Banker[];

  }