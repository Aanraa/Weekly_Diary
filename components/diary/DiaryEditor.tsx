"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import {
  Bold,
  Italic,
  Quote,
  ListOrdered,
  List,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Heading1,
  Heading2,
} from "lucide-react";
import { useState } from "react";

export function DiaryEditor() {
  const [content, setContent] = useState("");

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-card rounded-lg border shadow-sm">
        <div className="flex items-center gap-1 p-2 border-b">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Heading1 className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Heading1 className="h-4 w-4 mr-2" /> Heading 1
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Heading2 className="h-4 w-4 mr-2" /> Heading 2
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="sm">
            <Bold className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Italic className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Quote className="h-4 w-4" />
          </Button>
          <div className="h-4 w-px bg-border mx-2" />
          <Button variant="ghost" size="sm">
            <ListOrdered className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <List className="h-4 w-4" />
          </Button>
          <div className="h-4 w-px bg-border mx-2" />
          <Button variant="ghost" size="sm">
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <AlignCenter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <AlignRight className="h-4 w-4" />
          </Button>
        </div>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Dear Diary..."
          className="min-h-[500px] border-0 rounded-none focus-visible:ring-0 resize-none"
        />
      </div>
    </div>
  );
}