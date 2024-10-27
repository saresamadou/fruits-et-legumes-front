import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { useEffect, useState } from "react";
import { FruitModel } from "../models/FruitModel";

export function Fruits() {
  const [fruits, setFruits] = useState<FruitModel[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/fruits")
      .then((response) => response.json())
      .then((data) => setFruits(data))
      .catch((error) => console.error("Error fetching fruits:", error));
  }, []);

  return (
    <div className="container">
      <h1 className="text-green-500 text-2xl font-bold mb-4">
        Fruits du bénin
      </h1>

      <div className="flex flex-wrap">
        {fruits.map((fruit) => (
          <Card key={fruit.id} className="w-full md:w-1/4 border p-4 m-1">
            <CardHeader>
              <img
                src="holder.js/100px180"
                alt={fruit.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{fruit.name}</h2>
            </CardHeader>

            <CardContent className="text-gray-700 mb-4">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardContent>
            <CardFooter>
              <Button className="bg-blue-500 text-white py-2 px-4 rounded">
                Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
