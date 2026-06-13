import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
  ) {}

  login(username: string, password: string) {
  console.log("Input Username:", username);
  console.log("Env Username:", process.env.ADMIN_USERNAME);

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return {
      access_token: this.jwtService.sign({
        username,
      }),
    };
  }

  throw new Error("Invalid credentials");
}
}