import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { Loader } from './loader';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loader = inject(Loader);

  loader.show();

  return next(req).pipe(
    finalize(() => loader.hide())
  );
};
