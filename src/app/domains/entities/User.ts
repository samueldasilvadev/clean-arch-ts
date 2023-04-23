import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({
    length: 100
  })
  name!: string;

  @Column("text")
  email!: string;

  @Column("text")
  password!: string

  @Column(
    "datetime",
    {
      default: Date.now()
    }
  )
  created_at!: Date

  @Column("datetime")
  deleted_at?: Date
}
