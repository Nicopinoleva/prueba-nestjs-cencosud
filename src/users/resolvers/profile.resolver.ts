import { Query, Resolver } from '@nestjs/graphql';
import { ProfileModel } from '../models/profile.model';
import { ProfileService } from '../profile.service';

@Resolver()
export class ProfileResolver {
  constructor(private profileService: ProfileService) {}

  @Query((returns) => [ProfileModel])
  async getAllProfiles(): Promise<ProfileModel[]> {
    return this.profileService.getAllProfiles();
  }
}
