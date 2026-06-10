{
  "name": "asmr-auto",
  "version": "1.0.0",
  "description": "ASMR content automation pipeline",
  "scripts": {
    "install-all": "npm install && cd server && npm install && cd ../client && npm install",
    "dev": "concurrently \"cd server && npm run dev\" \"cd client && npm start\"",
    "build": "cd client && npm run build",
    "start": "cd server && npm start"
  },
  "dependencies": {
    "concurrently": "^8.2.2"
  }
}
