"use client";

import { useState } from "react";
import { Input } from "~/app/components/ui/input";
import { Button } from "~/app/components/ui/button";

export default function NewLinkInput() {
  const [newLink, setNewLink] = useState("");

  const handleLinkSubmit = async () => {
    const response = await fetch("/api/addLink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: newLink }),
    });

    if (!response.ok) {
      console.error("Error adding link:", await response.text());
    }
  };

  return (
    <div className="my-6 flex w-full max-w-sm items-center space-x-2 rounded-md bg-secondary p-8 sm:max-w-md md:max-w-lg lg:max-w-xl  xl:max-w-2xl">
      <Input
        className="w-full bg-white"
        placeholder="Add new link"
        type="text"
        onChange={(e) => setNewLink(e.target.value)}
      />
      <Button onClick={handleLinkSubmit} type="submit">
        Add Link
      </Button>
    </div>
  );
}
