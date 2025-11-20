"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NameGenerator() {
  const [prefix, setPrefix] = useState<string>("");
  const [suffix, setSuffix] = useState<string>("");
  const [generated, setGenerated] = useState<string>("");

  const adjectives = [
    "Dynamic",
    "Innovative",
    "Sleek",
    "Robust",
    "Intuitive",
    "Scalable",
    "Efficient",
    "Cutting-Edge",
  ];
  const nouns = [
    "Solutions",
    "Systems",
    "Technologies",
    "Platforms",
    "Services",
    "Applications",
    "Frameworks",
    "Networks",
  ];

  const generateName = () => {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const name = `${prefix}${adj}${noun}${suffix}`;
    setGenerated(name);
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Prefix</label>
        <Input
          type="text"
          value={prefix}
          onChange={(e) => setPrefix(e.target.value)}
          placeholder="e.g., My"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Suffix</label>
        <Input
          type="text"
          value={suffix}
          onChange={(e) => setSuffix(e.target.value)}
          placeholder="e.g., Co."
        />
      </div>
      <Button onClick={generateName} className="w-full">
        Generate Name
      </Button>
      {generated && (
        <div className="p-4 bg-muted rounded-md text-center">
          <span className="font-semibold text-lg">{generated}</span>
        </div>
      )}
    </div>
  );
}
