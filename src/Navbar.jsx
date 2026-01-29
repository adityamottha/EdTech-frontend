
function Navbar() {
return (
<nav className="bg-white flex items-center justify-between px-8 py-4
shadow-[0_14px_38px_rgba(0,0,0,0.5)] z-50 relative">
<h1 className="text-2xl font-bold text-[#1C3F60]">
AddicToPiano
</h1>

 {/* https://taxi.edmonton.in/ get refrence from this webPage
 and this one = https://talentgum.com/  */}
<div className="space-x-6">
<a href="#" className="hover:text-indigo-600">Home</a>
<a href="#" className="hover:text-indigo-600">Courses</a>
<a href="#" className="hover:text-indigo-600">About</a>
<button className="bg-[#1C3F60] text-white px-4 py-2 rounded-lg">
Login / Sign up
</button>
</div>
</nav>
);
}

export { Navbar }