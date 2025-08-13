"use client"

import React from "react";
import { Button } from "./ui/stateful-button";

function StatefulButtonDemo() {
  // dummy API call

    const handleEmailClick = () => {
    window.location.href = 'mailto:amine.derradji@ensttic.dz?subject=Hiring Offer=.';
  };
  return (
    <div className="flex h-12 w-full items-center justify-center">
      <Button onClick={handleEmailClick}>Contact Me</Button>
    </div>
  );
}

export default StatefulButtonDemo;