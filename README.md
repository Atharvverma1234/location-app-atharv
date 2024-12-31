# Delivery Location Project - By Atharv Verma

This project allows users to select and save their delivery location using the Google Maps API. The project includes features such as location search, geolocation, an address form for additional details, and an address management page.

## Features

1. **Location Selection**:
   - Users can enable their location using the browser's geolocation feature.
   - Alternatively, users can manually search for their location using Google Maps.

2. **Address Form**:
   - Users can enter specific address details such as house/flat/block number and area.
   - Users can categorize the address (e.g., Home, Office, Friends & Family).

3. **Address Management**:
   - View a list of saved addresses.
   - Update or delete saved addresses.
   - Search for recent addresses or add a new one.

4. **Backend Integration**:
   - The project connects to a Node.js backend server to save and retrieve addresses.

## Requirements

- Node.js (>= 14.x)
- React.js (>= 18.x)
- Google Maps API Key

## Installation

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo.git
   cd your-repo/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```
   The backend will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd your-repo/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

## Usage

1. Open the application in your browser (`http://localhost:3000`).
2. Select your location using geolocation or manual search.
3. Enter specific address details and categorize them.
4. Manage your saved addresses using the "Address Management" page.

## Additional Features Implemented

1. **Real-Time Map Pin Adjustment**:
   - Users can fine-tune their location by dragging the map pin.

2. **Locate Me Button**:
   - A "Locate Me" button enables users to find their current location automatically.

3. **Address Validation**:
   - The form validates that all fields are filled before submission.

4. **Persistent Storage**:
   - Saved addresses are stored on the backend for persistence.

## File Structure

```
project/
├── backend/
│   ├── server.js  # Node.js backend
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LocationModal.js
│   │   │   ├── MapComponent.js
│   │   │   ├── AddressForm.js
│   │   │   ├── AddressManagement.js
│   │   ├── App.js
│   ├── package.json
├── README.md
```

## Dependencies

### Frontend
- React
- Axios

### Backend
- Express
- Body-Parser
- CORS

## Notes

- Ensure that the backend server is running before starting the frontend.
- Make sure the Google Maps API Key has the necessary permissions enabled (e.g., Geocoding API, Maps JavaScript API).

## Future Improvements

1. **Database Integration**:
   - Replace in-memory storage with a database like MongoDB or MySQL.

2. **User Authentication**:
   - Allow users to log in and manage their addresses securely.

3. **Mobile Responsiveness**:
   - Optimize the interface for mobile devices.

## Creation

Created by Atharv Verma,


## Screen Recording 


https://github.com/user-attachments/assets/ed53abc0-e29f-4aff-b5db-a50288be9686

