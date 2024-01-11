import { Injectable } from '@angular/core';
import { ArtItemDTO, ImageSetDTO } from '../arts/shared/art.model';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { MOCK_ART } from '../arts/shared/mock-arts';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

const httpOptionsJson = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptions = {
  headers: new HttpHeaders()
};

@Injectable({
  providedIn: 'root'
})
export class ArtItemService {
  // baseUrl = 'http://127.0.0.1:8000/art'; //run locally
  baseUrl = 'https://conn-drm-backend-heroku-9d87207cd20e.herokuapp.com/';  // deployed to heroku
  _url_get_all_art_items = this.baseUrl + '/get-all-art-items';
  _url_image = this.baseUrl + '/add-image';
  _url_art_item_image = this.baseUrl + '/add-art-item-image';
  
  constructor(private http:HttpClient) { }

  postArtItemAndImage(data: FormData): Observable<any> {
    return this.http.post<any>(this._url_art_item_image, data).pipe(
        catchError((error:HttpErrorResponse) => {
          console.log(error);
          return throwError('An error occurred while updating art item: ' + error.message)
        }
      ))
  }

  getArtItems(): Observable<ArtItemDTO[]> {
    return this.http.get<ArtItemDTO[]>(this._url_get_all_art_items);
  }

  getArtItemsByCategory(category_name: string): Observable<ArtItemDTO[]> {
    const searchUrl = `${this.baseUrl}/get-art-items-by-category/${category_name}`;
    console.log("in art-item servie: searchUrl is:", searchUrl);
    return this.http.get<ArtItemDTO[]>(searchUrl);
  }
  

  getArtItemById(art_item_id: number): Observable<ArtItemDTO> {
    const searchUrl = `${this.baseUrl}/get-art-item/${art_item_id}`;
    return this.http.get<ArtItemDTO>(searchUrl);
  }


  // postImage(image: FormData): Observable<any> {
  //   console.log("image:", image);
  //   return this.http.post<any>(this._url_image, image, httpOptions).pipe(
  //       catchError((error:HttpErrorResponse) => {
  //         console.log(error);
  //         return throwError('An error occurred while updating art item: ' + error.message)
  //       }
  //     ))
  // }

  // postArtItem(art: ArtItemDTO): Observable<any> {
  //   console.log("art is:", art);
  //   const artJson = JSON.stringify(art);
  //   console.log("artJson is:", artJson);
  //   return this.http.post<any>(this._url, artJson, httpOptionsJson).pipe(
  //       catchError((error:HttpErrorResponse) => {
  //         console.log(error);
  //         return throwError('An error occurred while updating art item: ' + error.message)
  //       }
  //     ))
  // }
}
