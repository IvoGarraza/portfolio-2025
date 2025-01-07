export default function ListLayout({children}){
    return (
        <div className="">
            <div className="fixed top-2 right-2 rounded-full bg-slate-400 size-16"></div>
            <div>{children}</div>
        </div>
    )
}