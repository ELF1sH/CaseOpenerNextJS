import { articles } from "../../../data";

// accessible through localhost:3000/api/articles
export default function handler(req, res) {
    res.status(200).json(articles)
}