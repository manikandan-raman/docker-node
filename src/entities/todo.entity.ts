import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('todo')
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column({ type: 'text', nullable: true })
  desc: string;

  @Column('varchar')
  status: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn({ nullable: true })
  updated_at: string;
}
