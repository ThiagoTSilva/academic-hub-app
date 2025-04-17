import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../../services/auth/token/token.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  const user = tokenService.getCurrentUser(); 

  console.log(user)

  if (user && user.isLoggedIn) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
