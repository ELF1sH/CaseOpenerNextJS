import { cases } from '../../../data'

export default function handler(req, res) {
    const filtered = cases.filter(c => c.id.toString() === req.query.id.toString())

    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({ message: `Cases with id ${req.query.id} was not found` })
    }
}