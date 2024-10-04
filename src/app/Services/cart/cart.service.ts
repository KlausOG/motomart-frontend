import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartDTO } from '../../DTO/cart.dto';
import { CartItemDTO } from '../../DTO/cart-items.dto';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:8080/api/carts'; // Replace with your backend API URL

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  // Get all carts
  getAllCarts(): Observable<CartDTO[]> {
    return this.http.get<CartDTO[]>(this.baseUrl);
  }

  // Get cart by ID
  getCartById(cartId: number): Observable<CartDTO> {
    return this.http.get<CartDTO>(`${this.baseUrl}/${cartId}`);
  }

  // Create a new cart
  createCart(cartDTO: CartDTO): Observable<CartDTO> {
    return this.http.post<CartDTO>(this.baseUrl, cartDTO, this.httpOptions);
  }

  // Update an existing cart
  updateCart(cartId: number, cartDTO: CartDTO): Observable<CartDTO> {
    return this.http.put<CartDTO>(`${this.baseUrl}/${cartId}`, cartDTO, this.httpOptions);
  }

  // Delete a cart
  deleteCart(cartId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${cartId}`);
  }
}
