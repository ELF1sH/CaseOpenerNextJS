import { cases } from "../../../data";

// accessible through localhost:3000/api/cases
export default function handler(req, res) {
    res.status(200).json(cases)
}