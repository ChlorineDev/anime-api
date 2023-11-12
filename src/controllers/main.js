import { readFileSync } from 'node:fs';
import path from 'node:path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const data = readFileSync(path.join(__dirname, '..', 'data', 'angirls.json'), { encoding: 'utf-8' });
const animeGirls = JSON.parse(data);

export const test = (req, res) => {
  res.json({ message: "test" });
}

export const getAllAnimeGirls = (req, res) => {

  res.json(animeGirls);

}