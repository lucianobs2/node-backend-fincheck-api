import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
import { UsersRepository } from 'src/shared/database/repositories/users.repository';
import { SigninDTO } from './dto/sign-in-dto';
import { SignupDTO } from './dto/sign-up-dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}
  async authenticate(signinDTO: SigninDTO) {
    const { email, password } = signinDTO;

    const user = await this.usersRepository.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Credentials are not valid.');
    }

    const passwordIsValid = await compare(password, user.password);

    if (!passwordIsValid) {
      throw new UnauthorizedException('Credentials are not valid.');
    }

    const accessToken = await this.generateJwtToken(user.id);

    return { accessToken };
  }

  async signup(signupDTO: SignupDTO) {
    const { name, email, password } = signupDTO;

    const emailExists = await this.usersRepository.findUnique({
      where: { email },
      select: { id: true },
    });

    if (emailExists) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await hash(password, 10);

    const user = await this.usersRepository.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const accessToken = await this.generateJwtToken(user.id);

    return { accessToken };
  }

  private generateJwtToken(userId: string) {
    return this.jwtService.signAsync({ sub: userId });
  }
}
