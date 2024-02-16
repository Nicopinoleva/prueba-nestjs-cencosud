import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';
import { UserUpdateInput } from '../dto/user-update-input.dto';

export function UserUpdateOneOptional(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'UserUpdateOneOptional',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const obj = args.object as UserUpdateInput;
          return !!(obj.firstname || obj.lastname || obj.email);
        },
      },
    });
  };
}
