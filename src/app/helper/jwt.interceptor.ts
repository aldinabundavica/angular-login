import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS,  HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../service/token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private auth: TokenStorageService) {}

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let authReq = httpRequest;
      const token = this.auth.getToken();
      if(token!=null) {
          authReq = httpRequest.clone({headers: httpRequest.headers.set(TOKEN_HEADER_KEY, 'Bearer' + token) });
      }
        return next.handle(authReq);
      }
}

export const authInterceptorProviders = [
  { 
    provide: HTTP_INTERCEPTORS, 
    useClass: JwtInterceptor, 
    multi: true 
  }
];