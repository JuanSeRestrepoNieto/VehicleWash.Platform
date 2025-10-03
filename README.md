# VehicleWash.Platform
Plataforma de una empresa de lavado de vehículos.

## Architecture

This project consists of two main components:

### Backend (.NET 8 Web API)
- Located in the `Backend` folder
- Built with .NET 8
- Includes Swagger/OpenAPI documentation
- CORS enabled for frontend communication

### Frontend (React + Vite + TypeScript)
- Located in the `Frontend` folder
- Built with React 18
- TypeScript for type safety
- Vite for fast development and optimized builds

## Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js 18+](https://nodejs.org/)
- npm (comes with Node.js)

## Getting Started

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd Backend
   ```

2. Restore dependencies:
   ```bash
   dotnet restore
   ```

3. Build the project:
   ```bash
   dotnet build
   ```

4. Run the API:
   ```bash
   dotnet run
   ```

   The API will be available at:
   - HTTP: http://localhost:5021
   - HTTPS: https://localhost:7016
   - Swagger UI: http://localhost:5021/swagger or https://localhost:7016/swagger

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

   The application will be available at: http://localhost:5173

4. Build for production:
   ```bash
   npm run build
   ```

## Development

### Running Both Projects

For development, you'll need to run both the backend and frontend simultaneously:

1. **Terminal 1** - Start the backend:
   ```bash
   cd Backend
   dotnet run
   ```

2. **Terminal 2** - Start the frontend:
   ```bash
   cd Frontend
   npm run dev
   ```

The frontend will communicate with the backend API through CORS-enabled endpoints.

## Project Structure

```
VehicleWash.Platform/
├── Backend/              # .NET 8 Web API
│   ├── Program.cs       # Main application entry point
│   ├── appsettings.json # Configuration
│   └── ...
├── Frontend/            # React + Vite + TypeScript
│   ├── src/            # Source code
│   ├── public/         # Static assets
│   ├── index.html      # HTML entry point
│   ├── package.json    # npm dependencies
│   └── vite.config.ts  # Vite configuration
├── .gitignore
├── LICENSE
└── README.md
```

## Technologies

### Backend
- .NET 8
- ASP.NET Core Web API
- Swagger/OpenAPI
- Entity Framework Core (ready to be configured)

### Frontend
- React 18
- TypeScript
- Vite
- ESLint

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
