import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task{
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  title: String;

  @Column({ nullable: true })
  description: String;

  @Column()
  importance: String;
}