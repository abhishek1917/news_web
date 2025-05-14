import NewCard from "./new_card";

const newsItems = [
    {id:"1", title: "Breaking: Market Rally Continues", image: "/images/news1.jpg" },
    { id:"2",title: "AI Startups Booming in 2025", image: "/images/news2.jpg" },
    { id:"3",title: "React 19 New Features Released", image: "/images/news3.jpg" },
    { id:"4",title: "India's EV Push Accelerates", image: "/images/news4.jpg" },
    { id:"5",title: "SpaceX Sets New Record", image: "/images/news5.jpg" },
  ];


export default function NewsSection (){
    return (
      <section className="px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-grey-800 dark:text-white"> latest news</h2>
        <div className="flex overflow-x-auto gap-4 px-2 snap-x snap-mandatory">
                {
                    newsItems.map((item) => (
                        <NewCard key={item.id} title={item.title} image={item.image}/>
                     ) )
                }
        </div>
      </section>
    )
}