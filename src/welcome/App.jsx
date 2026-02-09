import './App.css'
import { Navbar } from './Navbar'
import { Hero } from './Hero'
import { Features } from './Features'
import { Grades } from './Grades'
import { WhyChooseUs } from './WhyChooseUs'
import { Footer } from './Footer'
import { Pricing } from './Pricing'
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