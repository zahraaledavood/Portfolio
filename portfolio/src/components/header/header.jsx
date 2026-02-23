const Header = () => {
    return(
        <header className="fixed top-0 left-0 right-0 z-50 bg-white ">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-12">
                <span className="font-monospace text-lg tracking-wide text-black hover:text-blue-300" >ZH DEV</span>
                <nav className="flex gap-8">
                    <a href="#home" className="text-sm tracking-[0.2em] text-black transition-colors hover:text-blue-300" >Home</a>
                    <a href="#about" className="text-sm tracking-[0.2em] text-black transition-colors hover:text-blue-300">About</a>
                    <a href="#contact" className="text-sm tracking-[0.2em] text-black transition-colors hover:text-blue-300">Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;