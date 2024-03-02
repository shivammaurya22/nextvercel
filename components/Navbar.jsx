import Link from "next/link";

const Navbar = () => {
  return (
    <div className="ml-2 mt-2 flex gap-80">
       <h1>Logo</h1>
       <nav className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/login">Login</Link>
       </nav>
       <button className="rounded bg-blue-600 text-white px-4 py-2">Sign Up</button>
    </div>
  )
}

export default Navbar;
