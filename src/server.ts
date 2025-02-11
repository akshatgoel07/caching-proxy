import express, { Request, Response } from "express";
import axios from "axios";
import { getCache, setCache } from "./cache";

export function startServer(port: number, origin: string) {
  const app = express();

  app.use(async (req: any, res: any) => {
    const cacheKey = `${origin}${req.originalUrl}`;

    const cachedResponse = getCache(cacheKey);
    if (cachedResponse) {
      res.set("X-Cache", "HIT");
      return res.json(cachedResponse);
    }

    try {
      const response = await axios.get(`${origin}${req.originalUrl}`);

      setCache(cacheKey, response.data);

      res.set("X-Cache", "MISS");
      res.json(response.data);
    } catch (error) {
      res.status(500).send("Error fetching data from origin");
    }
  });

  app.listen(port, () => {
    console.log(`🚀 Proxy running on http://localhost:${port}`);
  });
}
