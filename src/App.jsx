import './App.css'
import { Navbar } from "./welcome/Navbar";
import { Hero } from './welcome/Hero'
import { Features } from './welcome/Features'
import { Grades } from './welcome/Grades'
import { WhyChooseUs } from './welcome/WhyChooseUs'
import { Footer } from './welcome/Footer'
import { Pricing } from './welcome/Pricing'
function App() {
return (
<div className="font-sans text-gray-800">
<Navbar />
<Hero />
<Features />
<Grades />
<WhyChooseUs />
<Pricing />
<Footer />
</div>
)
}


export default App