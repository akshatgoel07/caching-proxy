# Caching Proxy

A simple caching proxy. This proxy caches API responses for 60 seconds to reduce load on the origin server and improve response times.

## Features

- **In-Memory Caching:** Caches API responses with a 60-second TTL.
- **Automatic Cache Invalidation:** Cached entries expire after 60 seconds.
- **CLI Configurable:** Customize the port, origin URL, and cache clearing options via command-line arguments.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (or yarn)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/akshatgoel07/caching-proxy.git
   cd caching-proxy

## Running
  ```
npm start -- --port=3000 --origin=https://www.akshatgoel.com/
```
