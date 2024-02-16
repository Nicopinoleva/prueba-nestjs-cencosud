import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserGroup } from './user-group.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => UserGroup, (userGroup) => userGroup.group)
  userGroup: UserGroup[];

  @Column({ length: 15 })
  name: string;

  @Column({ length: 50 })
  description: string;

  @CreateDateColumn({ type: 'timestamp with time zone', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone', name: 'updated_at' })
  updatedAt: Date;
}
