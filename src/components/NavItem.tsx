type props = {
    text: string;
    isActive?: boolean;
};

function NavItem({ text, isActive }: props) {

    return (
        <div className="flex items-center cursor-pointer">
            <div className={`text-[white] text-[16px] ${isActive ? "border-b-[whilte] border-b-[2px]" : ""} h-[78px] flex items-center`}>
                {text}
            </div>
        </div>
    )
}
export default NavItem;