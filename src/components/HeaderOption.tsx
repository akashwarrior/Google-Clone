export const HeaderOption = ({ Icons, title }: { Icons: React.ReactNode, title: string }) => {
    return (
        <div
            id={title}
            className={`flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 sm:pr-1 pb-3 cursor-pointer ${title === "All" && "text-blue-500 border-blue-500"}`}
        >
            {Icons}
            <p>{title}</p>
        </div>
    );
}