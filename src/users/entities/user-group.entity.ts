import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Group } from './group.entity';

@Entity()
export class UserGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.userGroup)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Group, (group) => group.userGroup)
  @JoinColumn()
  group: Group;
}
