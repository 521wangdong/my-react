import { useTransition } from "react"

const Button = (props) => {
    const {afresh} = props
    const [isLoading, startTransition] = useTransition()
    return(
        <>
        <button disabled={isLoading} onClick={() => {
          startTransition(() => {
            afresh();
          });
        }}>重新获取数据</button>
        </>
    )
}

export default Button