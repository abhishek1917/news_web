type newCardProps ={

    title: string;
    image: string ;
}

export default function NewCard({title,image} : newCardProps){
      return (
        <div className="min-w[250px] max-w[250px] bg-white dark:bg-grey-900 rounded-xl shadow-md overflow-hidden scroll-snap-align-start">
            <img  src= {image} alt={title} className="w-full h-40 object-cover "/>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-grey-800 dark:text-white">{title}</h3>
            </div>
        </div>
      )
}
