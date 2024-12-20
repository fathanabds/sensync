# API Documentation

## Overview

This document provides an overview of the API endpoints available in this Server.

## Base URL

```
http://localhost:3000
```

## Endpoints

### Book

#### Create Book

- **URL:** `/books`
- **Method:** `POST`
- **Description:** Creates new book data.
- **Request Body:**
  ```json
  {
    "title": "string",
    "author": "string",
    "year": "integer"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Harry Potter",
    "author": "Rowling",
    "year": 2024,
    "createdAt": "2024-12-20T10:33:38.149Z",
    "updatedAt": "2024-12-20T10:34:13.362Z"
  }
  ```

#### Get All Books

- **URL:** `/books`
- **Method:** `GET`
- **Description:** Retrieves all books data.
- **Response:**

  ```json
  [
    {
      "id": 1,
      "title": "Harry Potter",
      "author": "Rowling",
      "year": 2023,
      "createdAt": "2024-12-20T10:33:38.149Z",
      "updatedAt": "2024-12-20T10:33:38.149Z"
    }
  ]
  ```

#### Get Book by Id

- **URL:** `/book/:id`
- **Method:** `GET`
- **Description:** Retrieves book data.
- **Response:**
  ```json
  {
    "id": 1,
    "title": "Harry Potter",
    "author": "Rowling",
    "year": 2023,
    "createdAt": "2024-12-20T10:33:38.149Z",
    "updatedAt": "2024-12-20T10:33:38.149Z"
  }
  ```

#### Update Book by Id

- **URL:** `/books`
- **Method:** `PUT`
- **Description:** Updates book data.
- **Request Body:**
  ```json
  {
    "title": "string",
    "author": "string",
    "year": "integer"
  }
  ```
- **Response:**

  ```json
  {
    "id": 1,
    "title": "Harry Potter",
    "author": "Rowling",
    "year": 2024,
    "createdAt": "2024-12-20T10:33:38.149Z",
    "updatedAt": "2024-12-20T10:34:13.362Z"
  }
  ```

  #### Delete Book by Id

- **URL:** `/book/:id`
- **Method:** `DELETE`
- **Description:** Deletes book data.
- **Response:**
  ```json
  {
    "message": "Book has been deleted"
  }
  ```

## Error Codes

- `400 Bad Request` - The request was invalid or cannot be served.
- `404 Not Found` - The requested resource could not be found.
- `500 Internal Server Error` - An error occurred on the server.
