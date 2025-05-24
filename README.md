# Anime Recommendation System API

This project provides a REST API for the Anime Recommendation System. It lets users retrieve anime recommendations, view detailed information about each anime, search for anime by keywords, and add new recommendations.

# Hosted Link : https://anime-recommendation-systemxtage-frontend.onrender.com/

## PS: Might take 30-40 Seconds to load as free tier of render is used 

## Local Setup and Running the Project

### Prerequisites

- Python 3.8 or higher
- pip (Python package installer)
- (Optional) Docker and Docker Compose (if you prefer containerized deployment)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/shalabhsahu2001/PARTH.git
   cd backend #for backend
   cd frontend #for frontend

2. **Setup Virtual Environment:**
    ```bash
    python -m venv venv
    source venv/bin/activate   # Windows: venv\Scripts\activate

3. 
    ```bash
    pip install -r requirements.txt #backend
    npm install #frontend

4. **Database migrations**
    ```bash
    python manage.py migrate

5. **run server**
    ```bash
    python manage.py runserver 0.0.0.0:8000

## REST API Endpoints

### 1. Get Anime Recommendations
    Endpoint: GET /api/recommendations/

    Description: Retrieves a list of recommended anime.

    Response: Returns an array of anime objects.

### 2. Get Anime Details
    Endpoint: GET /api/anime/<id>/

    Description: Retrieves detailed information about a specific anime by its ID.

    Response: Returns an anime object with details such as title, genre, score, description, episodes, etc.


### 3. Search Anime

    Endpoint: GET /api/search/

    Description: Searches for anime based on a query parameter.

    Query Parameter: q - the search term.

    Example: GET /api/search/?q=naruto

    Response: Returns an array of matching anime objects.

### 4. Add New Recommendation
    Endpoint: POST /api/recommendations/

    Description: Submits a new anime recommendation.

    Request Body: JSON object with properties like title, genre, score, and description.

    Response: Returns the created anime recommendation object with an assigned ID and creation timestamp.

## How to run docker

### Build the Docker Images:
### From the project root (where your docker-compose.yml resides):
        docker-compose build

## Run the Containers:
## Start all the services (backend, frontend, and database):
        docker-compose up

**Docker image links**

Frontend: shalabh2002/anime_recommendation_systemxtage-frontend 
```bash
  docker pull shalabh2002/anime_recommendation_systemxtage-frontend
```
Backend: shalabh2002/anime_recommendation_systemxtage-backend
```bash
    docker pull shalabh2002/anime_recommendation_systemxtage-backend
```






