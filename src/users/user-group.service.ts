import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserGroup } from './entities/user-group.entity';

@Injectable()
export class UserGroupService {
  constructor(
    @InjectRepository(UserGroup) private groupRepository: Repository<UserGroup>,
  ) {}

  async getAllUserGroups(): Promise<UserGroup[]> {
    return await this.groupRepository.find({ relations: ['user', 'group'] });
  }
}
