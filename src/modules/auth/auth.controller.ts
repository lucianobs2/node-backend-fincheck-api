import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDTO } from './dto/sign-in-dto';
import { SignupDTO } from './dto/sign-up-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  authenticate(@Body() signinDTO: SigninDTO) {
    return this.authService.authenticate(signinDTO);
  }

  @Post('signup')
  create(@Body() signupDto: SignupDTO) {
    return this.authService.signup(signupDto);
  }
}
