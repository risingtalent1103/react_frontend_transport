type props = {
    content: string,
    className?: string,
}
const Button = ({content, className = "" } : props) => {
    return (
        <button className={"bg-color1 px-2 py-3 rounded-lg w-[150px] font-medium text-base text-white hover:text-black" + className}>{content}</button>
    )
}
export default Button;