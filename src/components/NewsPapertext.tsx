import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  {
    id: 1,
    category: "2024",
    time: "3m ago",
    type: "LIVE",
    title: "Democrats Kick Off First Night of Convention",
    description:
      "President Biden, the night’s headline speaker, will officially pass the torch to Kamala Harris. Jill Biden and Hillary Clinton are also scheduled to give speeches.",
    size: "col-span-2 row-span-2"
  },
  {
    id: 2,
    title: "Hillary Clinton and Kamala Harris: Inside Their Close Bond",
    description:
      "Mrs. Clinton lost out on becoming the first female president, but has been an ally for the woman now vying to do so. She will speak at the convention tonight.",
    time: "7 MIN READ",
    size: "col-span-1 row-span-1"
  },
  {
    id: 3,
    title:
      "Conventiongoers from Delaware were careful to emphasize their support for Kamala Harris. But some felt a sense of loss.",
    time: "3 MIN READ",
    size: "col-span-1 row-span-1"
  },
  {
    id: 4,
    title: "Protesters March in Chicago on Democratic Convention’s Opening Day",
    description:
      "Demonstrators were focused on a range of causes, but many said they were angry with the Biden administration.",
    size: "col-span-1 row-span-1"
  },
  {
    id: 5,
    title: "This Spider Uses a Light Show to Trick Eager Male Fireflies Into Its Web",
    description:
      "In China, the arachnids seem to somehow manipulate the flashing of a caught male firefly to resemble a female’s come-hither signal.",
    time: "8 MIN READ",
    size: "col-span-1 row-span-1"
  },
  {
    id: 6,
    title: "A hockey player wanted to form a professional women’s league. Billie Jean King helped make it happen.",
    size: "col-span-1 row-span-1"
  },
  {
    id: 7,
    title:
      "Yes, you can safely clean your vintage and antique rugs at home. Read this before you start.",
    source: "FROM WIRECUTTER",
    size: "col-span-1 row-span-1"
  },
];

const NewsApp = () => {
  return (
    <main className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
        {data.map((item) => (
          <Card
            key={item.id}
            className={`rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 ${item.size}`}
          >
            <CardContent className="p-4 space-y-2">
              {item.category && (
                <div className="text-sm text-red-600 font-bold">{item.category}</div>
              )}
              {item.type && (
                <div className="text-xs bg-red-100 text-red-700 px-2 py-1 inline-block rounded">
                  {item.type}
                </div>
              )}
              <h2 className="text-lg font-semibold leading-snug">{item.title}</h2>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              {item.time && (
                <p className="text-xs text-gray-400 italic">{item.time}</p>
              )}
              {item.source && (
                <p className="text-xs text-blue-500 uppercase font-semibold">{item.source}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default NewsApp;
