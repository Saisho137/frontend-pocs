import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const ErrorResponseInterceptor: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => next(req).pipe(catchError(handleErrorResponse));

function handleErrorResponse(error: HttpErrorResponse): ReturnType<typeof throwError> {
  return throwError(() => `Status Code: ${error.status}, message: ${error.message}`);
};