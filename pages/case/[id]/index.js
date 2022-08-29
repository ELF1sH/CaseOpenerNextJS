import { useRouter } from "next/router";

const Case = (props) => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            This is a case with id {id}
        </div>
    )
}

export default Case