"use client";

import * as React from "react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { 
  IconBrain, 
  IconCode, 
  IconBuildingSkyscraper, 
  IconChartBar 
} from "@tabler/icons-react";

export function GooeyTextDemo() {
  // Using text strings for the GooeyText component
  const textsWithIcons = [
    "Think", 
    "Code",  
    "Build", 
    "Impact" 
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-10">
      <h2 className="text-2xl font-bold text-center">Connect With Me</h2>
      <div className="h-[200px] flex items-center justify-center">
        <GooeyText
          texts={textsWithIcons}
          morphTime={1.5}
          cooldownTime={2}
          className="font-bold"
        />
      </div>
    </div>
  );
}
