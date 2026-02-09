function Features() {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <h3 className="text-3xl font-bold text-center mb-10">
        A learning platform trusted by parents globally
      </h3>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <FeatureCard
        profile={UserProfile}
          stars={Stars}
          title="Online Piano Classes"
          desc="Live interactive classes from certified piano teachers."
        />
        <FeatureCard
        profile={UserProfile}
          stars={Stars}
          title="Online Piano Classes"
          desc="Live interactive classes from certified piano teachers."
        />
        <FeatureCard
        profile={UserProfile}
         stars={Stars}
          title="Beginner Friendly"
          desc="No prior music knowledge required. Start from basics."
          
        />

      </div>
    </section>
  );
}

function FeatureCard({ profile,stars,title, desc, }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      {profile && < UserProfile />}
      {stars && <Stars />}
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{desc}</p>
      {/* render stars */}
      
      

    </div>
  );
};

const Stars = ()=>{
return (
  <>
  <i className="fa-solid fa-star text-orange-500"></i>
  <i className="fa-solid fa-star text-orange-500"></i>
  <i className="fa-solid fa-star text-orange-500"></i>
  <i className="fa-solid fa-star text-orange-500"></i>
  <i className="fa-solid fa-star text-orange-500"></i>
  </>
)
}

const UserProfile = () =>{
  return(
    <>
    <i class="fa-solid fa-user"></i>
    </>
  )
}

export { Features }