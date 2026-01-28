
function Navbar() {
return (
<nav className="flex items-center justify-between px-8 py-4 shadow-sm">
<h1 className="text-2xl font-bold text-indigo-600">
AddicToPiano
</h1>


<div className="space-x-6">
<a href="#" className="hover:text-indigo-600">Home</a>
<a href="#" className="hover:text-indigo-600">Courses</a>
<a href="#" className="hover:text-indigo-600">About</a>
<button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
Login
</button>
</div>
</nav>
);
}

export { Navbar }