import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const PermissionsGuard: CanActivateFn = (route, state) => {
  if (hasPermissionsMockup()) return true;

  alert('You have no permissions!');

  const router = inject(Router);
  router.navigate(['/home'])

  return false;
};

const hasPermissionsMockup: () => boolean = () => {
  return false;
};
